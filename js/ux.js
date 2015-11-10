'use strict';

  var currentUser = {
    loggedIn: false,
    skipLogIn: false,
    user: {},
  };

  var beforeLoginView = function(){
    $('#start-hide1').hide();
    $('#start-hide2').hide();
    $('#start-hide3').hide();
    $('#my-Books-Table').hide();
    $('#login-overlay').fadeIn(100).show();
  };

  var afterLoginView = function(){
    $('#login-overlay').hide();
    $('#start-hide1').fadeIn(700).show();
    $('#start-hide2').fadeIn(700).show();
    $('#start-hide3').fadeIn(700).show();
    $('#my-Books-Table').hide();
    loadBooks();
  };

  var skipLoginView = function(){
    $('#login-overlay').hide();
    $('#start-hide1').fadeIn(700).show();
    $('#start-hide2').fadeIn(700).show();
    $('#start-hide3').fadeIn(700).show();
    $('#my-Books-Table').hide();
    loadBooks();
  };

  var uxState = function (){
    if (currentUser.loggedIn){
      return afterLoginView();
    }else if (currentUser.skipLogIn){
      return skipLoginView();
    }else beforeLoginView();
  };

  var myBooksView = function(){
    $('#login-overlay').hide();
    $('#start-hide1').hide();
    $('#start-hide2').hide();
    $('#start-hide3').hide();
    $('#my-Books-Table').show();
  };


