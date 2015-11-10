'use strict';

var myBookTemplate = Handlebars.compile($('#my-books').html());

//MAIN TABLE RESULTS ON SEARCH PAGE

var myBooksCallback = function(error, data){
  if (error){console.log(error);
  }else {
    console.log(data.books);
    var rowHTML = bookTemplate({books: data.books});
    $("#myBooksTable").html(rowHTML);
  }
};

var loadMyBooks = function(){
  bookApi.myBooks(myBooksCallback);
};

$(document).ready(function(){

  $("#My-Books").on('click', function(){
    myBooksView();
  })

});
