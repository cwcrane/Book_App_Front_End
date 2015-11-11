'use strict';

var login = {

  registerCB: function(error, data) {
    if (error) {
      $("#RegisterMessage").html("An error occured, please try again.")
      //console.log('status: ' + error.status + ', error: ' +error.error)
    } else if (data) {
      $("#RegisterMessage").html("Registration successful, please log in.");
      //console.log(data);
    };
  },

  loginCB: function(error, data) {
    if (error) {
      $("#LoginMessage").html("Error occured, please try again.")
      //console.log('status: ' + error.status + ', error: ' +error.error)
    } else if (data){
      cUser.user = data.user;
      cUser.loggedIn = true;
      //console.log(cUser);
      ux.uxState();
      api.showBooks(bookFuncs.allBooksCB);
    };
  }
};
