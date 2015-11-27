'use strict';

var cUser = {
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
    $('#start-hide4').hide();
  },

  showTopNavBar: function() {
    $('.top-nav-bar').css('visibility', 'visible');
  },

  afterLoginView: function(){
    $('#login-overlay').hide();
    $('#top-nav-bar').fadeIn(700).show();
    ux.showTopNavBar();
    $('#start-hide2').fadeIn(700).hide();
    $('#start-hide3').fadeIn(700).show();
    $('#my-Books-View').hide();
    $('#start-hide4').hide();
  },

  skipLoginView: function(){
    $('#login-overlay').hide();
    $('#top-nav-bar').fadeIn(700).show();
    ux.showTopNavBar();
    $('#start-hide2').fadeIn(700).hide();
    $('#start-hide3').fadeIn(700).show();
    $('#my-Books-View').hide();
    $('#start-hide4').hide();
  },

  uxState: function (){
    if (cUser.loggedIn){
      return ux.afterLoginView();
    }else if (cUser.skipLogIn){
      return ux.skipLoginView();
    }else ux.beforeLoginView();
  },

  myBooksView: function(){
    $('#login-overlay').hide();
    $('#top-nav-bar').show();
    ux.showTopNavBar();
    $('#start-hide2').show();
    $('#start-hide3').hide();
    $('#my-Books-View').show();
    $('#start-hide4').hide();
  },

  profileView: function(){
    $('#login-overlay').hide();
    $('#top-nav-bar').show();
    ux.showTopNavBar();
    $('#start-hide2').hide();
    $('#start-hide3').hide();
    $('#my-Books-View').hide();
    $('#start-hide4').show();
  },

  btnGreenToYellow: function(button, newHTML){
    if (cUser.loggedIn) {
      $(button).removeClass('btn btn-success').addClass('btn btn-warning').html(newHTML);
    };
  },

  btnYellowToGreen: function(button){
    if (cUser.loggedIn) {
      $(button).parent().append('On Loan').css({ "color": "green"});
      $(button).remove();

    };
  }

};





