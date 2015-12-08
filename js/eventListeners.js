'use strict';

$(document).ready(function() {

  ux.uxState(); //load initial view first.

  bookFuncs.init(); //creates Handlebars Templates

  var form2object = function(form) {
    var data = {};
    $(form).find("input").each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        data[$(this).attr('name')] = $(this).val();
      }
    });
    return data;
  };

  var wrap = function(root, formData) {
    var wrapper = {};
    wrapper[root] = formData;
    return wrapper;
  };

  //date variables//
  Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  };

  var today = (new Date()).getFullYear() +'-'+ ((new Date()).getMonth()+1) +'-'+ (new Date()).getDate();

  var dueBack = function(days){
    return (new Date().addDays(days)).getFullYear() +'-'+ ((new Date().addDays(days)).getMonth()+1) +'-'+ (new Date().addDays(days)).getDate();
  };

  //Login Actions//

  $('#registerForm').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    api.register(credentials, login.registerCB);
    $(".form-control").val('');
    e.preventDefault();
  });

  $('#loginForm').on('submit', function(e){
    var credentials = wrap('credentials', form2object(this));
    api.login(credentials, login.loginCB);
    $(".form-control").val('');
    e.preventDefault();
  });

  $("#skipLogIn").on('click', function(e){
    cUser.skipLogIn = true;
    ux.uxState();
    api.showBooks(bookFuncs.allBooksCB);
    e.preventDefault();
  });

  //Navbar Actions//

  $("#navbar-book-swap").on('click', function(){
    ux.uxState();
  });

  $("#navbar-Map").on('click', function(){
    ux.mapView();
  });

  $("#navbar-Search").on('click', function(){
    ux.uxState();
  });

  $("#navbar-My-Books").on('click', function(){
    ux.myBooksView();
    api.myBooks(cUser.user.token, bookFuncs.myBooksCB);
    api.requestYou(cUser.user.token, bookFuncs.requestYouCB);
    api.myLoans(cUser.user.token, bookFuncs.requestMeCB);
  });

  $("#navbar-Profile").on('click', function(){
    ux.profileView();
    api.myProfile(cUser.user.id, bookFuncs.myProfileCB);
  });

  //My Books//

  $('#Add-My-Book').on('submit', function(e){
    var data = wrap('book', form2object(this));
    api.addBook(cUser.user.token, data, bookFuncs.addBookCB);
    e.preventDefault();
  });

  //Delete Book//

  $("#myBooksTable").on('click', function(e){
    var btnClicked = $(e.target);
    var id = btnClicked.data('delete-id');
    console.log("You clicked on boook "+ id);
    api.deleteBook(cUser.user.token, id, bookFuncs.newRequestCB);
    $(btnClicked).parent().parent().remove();
    e.preventDefault();
  });

  //Search//

  $("#main-search-by-title").on('submit', function(e){
    var input = $(this).find("input").val();
    api.searchBook(input, bookFuncs.allBooksCB);
    e.preventDefault();
  });

  $("#reload-main-search").on('click', function(e){
    api.showBooks(bookFuncs.allBooksCB);
    $(".form-control").val('');
    e.preventDefault();
  });

  //Requests//

  $("#allBooks").on('click', function(e){
    var btnClicked = $(e.target)
    // HTML 5 gives all element the ability to store data on them
    // need <p data-foo="hello"></p>
    // elementForP.data('foo') // return the string "hello"
    var id = btnClicked.data('book-id');
    console.log("You clicked on id "+ id);
    var params = {
        borrow_request: {
        book_id: id,
        user_id: cUser.user.id,
        request_date: today
      }
    };
    api.requestBook(cUser.user.token, params, bookFuncs.newRequestCB);
    ux.btnGreenToYellow(btnClicked, 'requested');
    e.preventDefault();
  });

  $("#request-for-me").on('click', function(e){
    var btnClicked = $(e.target);
    var id = btnClicked.data('request-id');
    console.log("You clicked on borrow_request "+ id);
    var params = {
        borrow_request: {
        response: true,
        response_date: today,
        due_back: dueBack(45)
      }
    };
    api.updateReq(cUser.user.token, id, params, bookFuncs.newRequestCB);
    ux.btnYellowToGreen(btnClicked);
    e.preventDefault();
  });

});

