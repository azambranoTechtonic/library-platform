function Library()
{
  this.bookShelf = new Array();
};

Library.prototype.addBook = function(book)
{
  // Add a book to bookShelf

  return true; //True if not already added - false if it already added
};

Library.prototype.removeBookByTitle = function(title)
{
  // Remove books from bookShelf matching title

  return true; //true if book is removed - false fi theres no match
};

Library.prototype.removeBookByAuthor = function(authorName)
{
  // Remove books from bookShelf matching author's name

  return true; //true if book is removed - false fi theres no match
};

Library.prototype.getRandomBook = function()
{
  // Select a random book from bookShelf

  return oBook; //Single Book Obj
};

Library.prototype.getBookByTitle = function(title)
{
  // Select books from bookShelf Completely or Partially matching title

  return Books; //Books array
};

Library.prototype.getBookByAuthor = function(authorName)
{
  // Select books from bookShelf Completely or Partially matching Author name

  return Books; //Books array
};

Library.prototype.addBooks = function(books)
{
  // Adds books from Books array into bookShelf

  return Number; //Number of Books added to bookShelf
};

Library.prototype.getAuthors = function()
{
  // Select distinct authorName from bookShelf

  return Authors; //Authors array from bookShelf
};

Library.prototype.getRandomAuthorName = function()
{
  // Select random authorName from bookShelf

  return Author; //random authorName string from bookShelf
};

document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});
