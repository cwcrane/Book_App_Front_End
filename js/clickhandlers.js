'use strict';

$(document).ready(

  $(function() {

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

    var callback = function callback(error, data) {
      if (error) {
        console.log('status: ' + error.status + ', error: ' +error.error)
      } else {console.log(data)};
    };

    $('#registerForm').on('submit', function(e) {
      var credentials = wrap('credentials', form2object(this));
      bookApi.register(credentials, callback);
      e.preventDefault();
    });


    $('#loginForm').on('submit', function(e){
      var credentials = wrap('credentials', form2object(this));
      bookApi.login(credentials, callback);
      e.preventDefault();
    });


  })
);

