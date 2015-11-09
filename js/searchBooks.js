'use strict';

//$(document).ready(function() {

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


//LOAD BOOKS

  var bookCallback = function(error, data){
    if (error){console.log(error);
    }else {console.log(data);}
  };

  var loadBooks = function(){
    bookApi.showBooks(bookCallback);
  };


//});
