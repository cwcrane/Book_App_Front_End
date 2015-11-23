'use strict';

var api = {
  //url: 'http://localhost:3000',
  url: 'https://glacial-journey-5388.herokuapp.com',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/register',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  showBooks: function(callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/books',
    }, callback);
  },

  myBooks: function(token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/books',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
  },

  addBook: function(token, credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/books',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  searchBook: function(query, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/books'+'/?query='+query,
    }, callback);
  },

  requestYou: function(token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/borrow_requests',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
  },

  myLoans: function(token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/borrowed_books',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
  },

  requestBook: function(token, params, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/borrow_requests',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      data: JSON.stringify(params),
      dataType: 'json'
    }, callback);
  },

  updateReq: function(token, id, params, callback){
    this.ajax({
      method: 'PATCH',
      url: this.url + '/borrow_requests/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      data: JSON.stringify(params),
      dataType: 'json'
    }, callback);
  },

  deleteBook: function(token, id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/books/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
  }

//need comma in between

}
