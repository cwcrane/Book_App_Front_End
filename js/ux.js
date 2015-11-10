'use strict';

var currentUser = {
  loggedIn: false,
  skipLogIn: false,
  user: {},
};

var ux = {

  beforeLoginView: function(){
    $('#top-nav-bar').hide();
    $('#start-hide2').hide();
    $('#start-hide3').hide();
    $('#my-Books-View').hide();
    $('#login-overlay').fadeIn(100).show();
  },

  showTopNavBar: function() {
    $('.top-nav-bar').css('visibility', 'visible');
  },

  afterLoginView: function(){
    $('#login-overlay').hide();
    $('#top-nav-bar').fadeIn(700).show();
    ux.showTopNavBar();
    $('#start-hide2').fadeIn(700).show();
    $('#start-hide3').fadeIn(700).show();
    $('#my-Books-View').hide();
  },

  skipLoginView: function(){
    $('#login-overlay').hide();
    $('#top-nav-bar').fadeIn(700).show();
    ux.showTopNavBar();
    $('#start-hide2').fadeIn(700).show();
    $('#start-hide3').fadeIn(700).show();
    $('#my-Books-View').hide();
  },

  uxState: function (){
    if (currentUser.loggedIn){
      return ux.afterLoginView();
    }else if (currentUser.skipLogIn){
      return ux.skipLoginView();
    }else ux.beforeLoginView();
  },

  myBooksView: function(){
    $('#login-overlay').hide();
    $('#top-nav-bar').show();
    ux.showTopNavBar();
    $('#start-hide2').hide();
    $('#start-hide3').hide();
    $('#my-Books-View').show();
  }

};





