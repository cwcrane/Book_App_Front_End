'use strict';

  Handlebars.registerHelper('ifOnLoan', function (conditionalVariable, options){
    if (conditionalVariable === options.hash.value) {
      return options.fn(this)
    } else {
      return options.inverse(this);
    }
  });

  var bookTemplate = Handlebars.compile($('#book-index').html());

//MAIN TABLE RESULTS ON SEARCH PAGE

  var bookCallback = function(error, data){
    if (error){console.log(error);
    }else {
      console.log(data.books);
      var rowHTML = bookTemplate({books: data.books});
      $("#allBooks").html(rowHTML);
    }
  };

  var loadBooks = function(){
    bookApi.showBooks(bookCallback);
  };



