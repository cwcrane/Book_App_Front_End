'use strict';

$(document).ready(function() {

  uxState();

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

  var wrap = function wrap(root, formData) {
    var wrapper = {};
    wrapper[root] = formData;
    return wrapper;
  };

//REGISTER CLICKHANDLER

  var registerCallback = function(error, data) {
    if (error) {
      $("#RegisterMessage").html("An error occured, please try again.")
      //console.log('status: ' + error.status + ', error: ' +error.error)
    } else if (data) {
      $("#RegisterMessage").html("Registration successful, please log in.");
      //console.log(data);
    };
  };

  $('#registerForm').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    bookApi.register(credentials, registerCallback);
    e.preventDefault();
  });


//LOGIN CLICKHANDLER

  var loginCallback = function(error, data) {
    if (error) {
      $("#LoginMessage").html("Error occured, please try again.")
      //console.log('status: ' + error.status + ', error: ' +error.error)
    } else if (data){
      currentUser.user = data.user;
      currentUser.loggedIn = true;
      //console.log(currentUser);
      uxState();
    };
  };

  $('#loginForm').on('submit', function(e){
    var credentials = wrap('credentials', form2object(this));
    bookApi.login(credentials, loginCallback);
    e.preventDefault();
  });

  $("#skipLogIn").on('click', function(e){
    currentUser.skipLogIn = true;
    uxState();
    e.preventDefault();
  });

});

