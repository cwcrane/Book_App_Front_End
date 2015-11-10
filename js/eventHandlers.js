'use strict';

$(document).ready(function() {

  ux.uxState(); //load initial view first.

  searchBooks.init(); //creates Handlebars Templates

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

  $('#registerForm').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    bookApi.register(credentials, login.registerCallback);
    e.preventDefault();
  });

  $('#loginForm').on('submit', function(e){
    var credentials = wrap('credentials', form2object(this));
    bookApi.login(credentials, login.loginCallback);
    e.preventDefault();
  });

  $("#skipLogIn").on('click', function(e){
    currentUser.skipLogIn = true;
    ux.uxState();
    bookApi.showBooks(searchBooks.allBooksCallback);
    e.preventDefault();
  });

  $("#navbar-My-Books").on('click', function(){
    ux.myBooksView();
    bookApi.myBooks(currentUser.user.token, searchBooks.myBooksCallback);
  });

  $("#navbar-Search").on('click', function(){
    ux.uxState();
  });

  $("#navbar-Profile").on('click', function(){

  });

  $('#Add-My-Book').on('submit', function(e){
    var credentials = wrap('book', form2object(this));
    bookApi.addBook(currentUser.user.token, credentials, searchBooks.addBookCallback);
    e.preventDefault();
  });

});
