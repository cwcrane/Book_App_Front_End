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
    $('#login-overlay').show();
  };

  var afterLoginView = function(){
    $('#start-hide1').show();
    $('#start-hide2').show();
    $('#start-hide3').show();
    $('#login-overlay').hide();
  };

  var skipLoginView = function(){
    $('#start-hide1').show();
    $('#start-hide2').show();
    $('#start-hide3').show();
    $('#login-overlay').hide();
  };

  var uxState = function (){
    if (currentUser.loggedIn){
      return afterLoginView();
    }else if (currentUser.skipLogIn){
      return skipLoginView();
    }else beforeLoginView();
  };
