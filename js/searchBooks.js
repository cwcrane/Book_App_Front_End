'use strict';

//$(document).ready(function() {


//LOAD BOOKS

  var bookTemplate = Handlebars.compile($('#book-index').html());

  var bookCallback = function(error, data){
    if (error){console.log(error);
    }else {
      //console.log(data);
      var rowHTML = bookTemplate({books: data.books});
      $("#books").html(rowHTML);
    }
  };

  var loadBooks = function(){
    bookApi.showBooks(bookCallback);
  };

//});

