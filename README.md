#Book Swap


###Purpose:

This app was conceived with the intention of giving people an easy way to borrow books from their neighbors and friends. More thorough users stories are below, but the basic idea is that a user can search for a book and request to borrow it from anyone in the area which might have it on their bookshelf. A use can also add their own books and loan them out.

###User Stories:

As a user...

  *I can make a profile.
  *I can add my library so others can borrow from me.
  *I can view my library and the status of each book (available, or loaned out)
  *I can search for other people’s books by title, and sort results by location
  *I can view what I have borrowed from others, and when it’s due back.
  *I can make a request to borrow from others’ libraries.
  *I can accept or reject a borrow request
  *I can check out the profile of the requestor

###Stretch goals (still working on these):

  *Get reviews from goodreads.com
  *I can rate my books.
  *I can search by users, to view their library and ratings.
  *prevent borrow requests until the user has listed at least one book.
  *add notes on books
  *map view of books


###Database Structure:

The database has several relational tables. Here are the relationships:

  *A USER has one PROFILE.
  *A USER has many BOOKS.
  *A USER has many BORROW_REQUESTS.
  *A BOOK has many REVIEWS.

###Challenges Faced:

  *laid out too big of a scope of a project for one week. Too many tables.
  *this meant I had a lot of apis, a lot of clickhandlers, and a lot of tables to make.
  *this turned out to be a good challenge because it forced me to organize my code early on.

###Proud of:

  *API with goodreads.com
  *dynamic handlebars templates whose buttons have clickhandlers.
  *search by title and artist with substrings.
  *better organization of my code since last time: (ux states, callback functions, event handlers, api...all have their own js files.)

###Next Steps:

  *Still need to build a way for users to edit profiles.
  *give users the ability to rate books, search for their friends, andmake a top books list.
