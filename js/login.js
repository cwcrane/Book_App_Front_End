'use strict';

var login = {

  registerCallback: function(error, data) {
    if (error) {
      $("#RegisterMessage").html("An error occured, please try again.")
      //console.log('status: ' + error.status + ', error: ' +error.error)
    } else if (data) {
      $("#RegisterMessage").html("Registration successful, please log in.");
      //console.log(data);
    };
  },

  loginCallback: function(error, data) {
    if (error) {
      $("#LoginMessage").html("Error occured, please try again.")
      //console.log('status: ' + error.status + ', error: ' +error.error)
    } else if (data){
      currentUser.user = data.user;
      currentUser.loggedIn = true;
      console.log(currentUser);
      ux.uxState();
      bookApi.showBooks(searchBooks.allBooksCallback);
    };
  }
};
