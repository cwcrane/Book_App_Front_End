'use strict';

$(document).ready(

  $(function() {
    //returns data entered in form, as an object
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
        //console.error(error);
        //$('#result').val('status: ' + error.status + ', error: ' +error.error);
        //return;
      } else {console.log(data)};
      //$('#result').val(JSON.stringify(data, null, 4));
    };

    $('#registerForm').on('submit', function(e) {
      var credentials = wrap('credentials', form2object(this));
      bookApi.register(credentials, callback);
      // tttapi.register(credentials, callback);
      e.preventDefault();
    });

})

);

