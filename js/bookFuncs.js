'use strict';

var bookFuncs = {

  //Handlebars to generate tables//
  bookTemplate: function(){},
  myBookTemplate: function(){},
  requestToYouTemplate: function(){},
  requestForMeTemplate: function(){},

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
    this.requestToYouTemplate = Handlebars.compile($('#request-to-you-index').html());
    this.requestForMeTemplate = Handlebars.compile($('#request-for-me-index').html());
  },
  // ^ end Handlebars ^ //

  allBooksCB: function(error, data){
    if (error) {
      console.log(error);
    }else {
      console.log(data.books);
      var rowHTML = bookFuncs.bookTemplate({books: data.books});
      $("#allBooks").html(rowHTML);
    }
  },

  myBooksCB: function(error, data){
    if (error) {
      console.log(error);
    }else {
      console.log(data.books);
      var rowHTML = bookFuncs.myBookTemplate({books: data.books});
      $("#myBooksTable").html(rowHTML);
    }
  },

  addBookCB: function(error, data){
    if (error) {
      console.log(error);
      if (!cUser.loggedIn) {
        $("#Add-My-Book-Message").html("Please log in to make a book list and add books");
      }
    }else {
      //console.log(data);
      $("#Add-My-Book-Message").html("Successfully added " + data.book.title + " to your Book list");
      //re-load the My Books table.
      api.myBooks(cUser.user.token, bookFuncs.myBooksCB);
    }
  },

  requestYouCB: function(error, data){
    if (error) {
      console.log(error);
    }else {
      console.log(data);
      var rowHTML = bookFuncs.requestToYouTemplate({borrow_requests: data.borrow_requests});
      $("#request-to-you").html(rowHTML);
    }
  },

  requestMeCB: function(error, data){
    if (error) {
      console.log(error);
    }else {
      console.log('requests for my books:')
      console.log(data.books);
      var rowHTML = bookFuncs.requestForMeTemplate({books: data.books});
      $("#request-for-me").html(rowHTML);
    }
  },

  newRequestCB: function(error, data){
    if (error) {
      console.log("error" + error);
    }else {
      console.log("success" + data);
    }
  }

};
