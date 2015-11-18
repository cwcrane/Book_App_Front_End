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

  $("#navbar-My-Books").on('click', function(){
    ux.myBooksView();
    api.myBooks(cUser.user.token, bookFuncs.myBooksCB);
    api.requestYou(cUser.user.token, bookFuncs.requestYouCB);
    api.myLoans(cUser.user.token, bookFuncs.requestMeCB);
  });

  $("#navbar-Search").on('click', function(){
    ux.uxState();
  });

  $("#navbar-Profile").on('click', function(){

  });

  //My Books//

  $('#Add-My-Book').on('submit', function(e){
    var data = wrap('book', form2object(this));
    api.addBook(cUser.user.token, data, bookFuncs.addBookCB);
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

  $("#allBooks").on('click', function(event){
    var buttonClicked = $(event.target)
    // HTML 5 gives all element the ability to store data on them
    // need <p data-foo="hello"></p>
    // elementForP.data('foo') // return the string "hello"
    var idClicked = buttonClicked.data('id');
    console.log(idClicked);
    console.log("You clicked on id "+ idClicked);

    var newRequest = {
        borrow_request: {
        book_id: idClicked,
        user_id: cUser.user.id
        //date: Date.now
      }
    };

    api.requestBook(cUser.user.token, newRequest, bookFuncs.newRequestCB);
    //$(event.target).attr("class").text("btn btn-warning");
    $('*[data-delete-id=idClicked]').html("requested");
    event.preventDefault();
  });

});

