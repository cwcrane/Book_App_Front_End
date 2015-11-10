'use strict';

var bookApi = {
  url: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function register(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/register',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function login(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  showBooks: function showBooks(callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/books',
      contentType: 'application/json',
      //data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  myBooks: function myBooks(token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/books',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
  }

//need comma in between

}
