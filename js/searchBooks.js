'use strict';

var searchBooks = {

  bookTemplate: function(){},
  myBookTemplate: function(){},

  init: function(){
    Handlebars.registerHelper('ifOnLoan', function (conditionalVariable, options){
      if (conditionalVariable === options.hash.value) {
        return options.fn(this)
      } else {
        return options.inverse(this);
      }
    });

    this.bookTemplate = Handlebars.compile($('#book-index').html());
    this.myBookTemplate = Handlebars.compile($('#my-books').html());
  },

  allBooksCallback: function(error, data){
    if (error) {
      console.log(error);
    }else {
      console.log(data.books);
      var rowHTML = searchBooks.bookTemplate({books: data.books});
      $("#allBooks").html(rowHTML);
    }
  },

  myBooksCallback: function(error, data){
    if (error) {
      console.log(error);
    }else {
      console.log(data.books);
      var rowHTML = searchBooks.myBookTemplate({books: data.books});
      $("#myBooksTable").html(rowHTML);
    }
  },

  addBookCallback: function(error, data){
    if (error) {
      console.log(error);
    }else {
      console.log(data);
      $("#Add-My-Book-Message").html("Successfully added " + data.book.title + " to your Book list");
      //re-load the My Books table.
      bookApi.myBooks(currentUser.user.token, searchBooks.myBooksCallback);
    }
  }

};
