'use strict';

$(document).ready(function() {

  ux.uxState(); //load initial view first.

  searchBooks.init(); //creates Handlebars Templates

  $('#registerForm').on('submit', function(e) {
    var credentials = login.wrap('credentials', login.form2object(this));
    bookApi.register(credentials, login.registerCallback);
    e.preventDefault();
  });

  $('#loginForm').on('submit', function(e){
    var credentials = login.wrap('credentials', login.form2object(this));
    bookApi.login(credentials, login.loginCallback);
    e.preventDefault();
  });

  $("#skipLogIn").on('click', function(e){
    currentUser.skipLogIn = true;
    ux.uxState();
    bookApi.showBooks(searchBooks.allBooksCallback);
    e.preventDefault();
  });

  $("#My-Books").on('click', function(){
    bookApi.myBooks(currentUser.user.id, currentUser.user.token, searchBooks.myBooksCallback);
    ux.myBooksView();
  })


});
