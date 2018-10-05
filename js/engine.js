
(function() {//SINGLETON
  var instance;
  Library = function() {
    this.bookShelf = new Array();
    if (instance) { //if a instance of library already exists this will point the newly made library to the Singleton instance
      return instance;
    }
    instance = this; //if a instance of library does not yet exist this will get and set the instance name for the new library
  }
})()

Library.prototype.addBook = function(book)
{
  // Add a book to bookShelf
  var bAdd = true;

  if (this.checkBookByTitle(book.title).length < 1) {
    this.bookShelf.push(book);
  } else {
    bAdd = false;
  }

  return bAdd; //True if not already added - false if it already added
};

Library.prototype.removeBookByTitle = function(title)
{
  // Remove books from bookShelf matching title

  var bDel = false;
  var posBook = this.checkBookByTitle(title);

  for (var i = 0;i < posBook.length;i++) {
    var nPos = this.checkBookByTitle(title);
    this.bookShelf.splice(nPos[0],1);
    bDel = true;
  }

  return bDel; //true if book is removed - false if theres no match
};

Library.prototype.removeBookByAuthor = function(author)
{
  // Remove books from bookShelf matching author's name

  var bDel = false;
  var posBook = this.checkBookByAuthor(author);

  for (var i = 0;i < posBook.length;i++) {
    var nPos = this.checkBookByAuthor(author);
    this.bookShelf.splice(nPos[0],1);
    bDel = true;
  }

  return bDel; //true if book is removed - false if theres no match
};

Library.prototype.getRandomBook = function()
{
  // Select a random book from bookShelf
  var iRandomBook = Math.floor(Math.random() * this.bookShelf.length) - 1;

  return this.bookShelf[iRandomBook]; //random Single Book Obj
};

Library.prototype.checkBookByTitle = function(title)
{
  // Checks if a book exist in bookShelf Completely matching title

  var posBook = [];

  for (var i = 0;i < this.bookShelf.length;i++) {

    if (this.bookShelf[i].title === title) {
      posBook.push(i);
    }

  }

  return posBook; //Book Position array
};

Library.prototype.checkBookByAuthor = function(author)
{
  // Checks if a book exist in bookShelf Completely matching title

  var posBook = [];

  for (var i = 0;i < this.bookShelf.length;i++) {

    if (this.bookShelf[i].author === author) {
      posBook.push(i);
    }

  }

  return posBook; //Book Position array
};

Library.prototype.getBookByTitle = function(title)
{
  // Select books from bookShelf Completely or Partially matching title
  var mBooks = [];
  var lcTitle;
  var lcBsTitle;

  for (var i = 0;i < this.bookShelf.length;i++) {

    lcTitle = title.toLowerCase();
    lcBsTitle = this.bookShelf[i].title.toLowerCase();

    if (lcBsTitle.includes(lcTitle)) {
      mBooks.push(this.bookShelf[i]);
    }
  }
  return mBooks; //Books array
};

Library.prototype.getBookByAuthor = function(author)
{
  // Select books from bookShelf Completely or Partially matching Author name
  var mBooks = [];
  var lcAuthor;
  var lcBsAuthor;

  for (var i = 0;i < this.bookShelf.length;i++) {

    lcAuthor = author.toLowerCase();
    lcBsAuthor = this.bookShelf[i].author.toLowerCase();

    if (lcBsAuthor.includes(lcAuthor)) {
      mBooks.push(this.bookShelf[i]);
    }
  }
  return mBooks; //Books array
};

Library.prototype.getBookByNumPages = function(numPages)
{
  // Select books from bookShelf Completely matching numPages
  var mBooks = [];

  for (var i = 0;i < this.bookShelf.length;i++) {

    if (this.bookShelf[i].numPages === numPages) {
      mBooks.push(this.bookShelf[i]);
    }
  }
  return mBooks; //Books array
};

Library.prototype.getBookByPubDate = function(pubDate)
{
  // Select books from bookShelf Completely matching numPages
  var mBooks = [];

  for (var i = 0;i < this.bookShelf.length;i++) {
    if (this.bookShelf[i].pubDate.includes(pubDate)) {
      mBooks.push(this.bookShelf[i]);
    }
  }
  return mBooks; //Books array
};

Library.prototype.getAllBooks = function()
{
  // Select All books from bookShelf

  return this.bookShelf; //Books array

};

Library.prototype.searchByAnyProperty = function(oBook)
{
  var sTitle = [];
  var sAuthor = [];
  var sNumPages = [];
  var sPubDate = [];
  var sResult = [];


  if (oBook.hasOwnProperty('title')) {
    sTitle = this.getBookByTitle(oBook.title);
  }

  if (oBook.hasOwnProperty('author')) {
    sAuthor = this.getBookByAuthor(oBook.author);
  }

  if (oBook.hasOwnProperty('numPages')) {
    sNumPages = this.getBookByNumPages(oBook.numPages);
  }

  if (oBook.hasOwnProperty('pubDate')) {
    sPubDate = this.getBookByPubDate(oBook.pubDate);
  }

  sResult = sTitle.concat(sAuthor, sNumPages, sPubDate);


  var unique_array = []
  for(let i = 0;i < sResult.length; i++){
    if(unique_array.indexOf(sResult[i]) == -1){
        unique_array.push(sResult[i])
    }
  }

  return unique_array;
};

Library.prototype.addBooks = function(books)
{
  // Adds books from Books array into bookShelf
  var nBooks = 0;

  for (var i = 0;i < books.length;i++) {

    if (this.addBook(books[i])) {
     //this.bookShelf.push(books[i]);
     nBooks = nBooks + 1;
    }

  }

  return nBooks; //Number of Books added to bookShelf
};

Library.prototype.getAuthors = function()
{
  // Select distinct authorName from bookShelf

  var authors = [];
  var sAdd = true;

  for (var i = 0;i < this.bookShelf.length;i++) {

    if (authors.length === 0) {
      authors.push(this.bookShelf[i].author);
    } else {
      sAdd = true;
      for (var j = 0;j < authors.length;j++) {
       if (this.bookShelf[i].author === authors[j]) {
        sAdd = false;
       }
      }
      if (sAdd) {
        authors.push(this.bookShelf[i].author);
      }
    }
  }

  return authors; //Authors array from bookShelf
};

Library.prototype.getRandomAuthorName = function()
{
  // Select random authorName from bookShelf

  var rAuthors = this.getAuthors();

  var iRandomAuthor = Math.floor(Math.random() * rAuthors.length);

  return rAuthors[iRandomAuthor]; //random authorName string from bookShelf

};

Library.prototype.storeBookShelf = function()
{
  // Store bookShelf on Local Storage

  //convert JSON animal into a string
  var dehydratedBookShelf = JSON.stringify(this.bookShelf);

  //save it with local storage
  window.localStorage.setItem('bookShelf', dehydratedBookShelf);

  return true; //random authorName string from bookShelf
};

Library.prototype.restoreBookShelf = function()
{
  // Restore bookShelf from Local Storage

  //get 'bookShelf' and rehydrate it  (convert it back JSON)
  var rehydratedBookShelf = JSON.parse(window.localStorage.getItem('bookShelf'));

  return rehydratedBookShelf;
}


document.addEventListener("DOMContentLoaded", function(e){

  window.gLibrary = new Library();

  window.book1 = new Book("it", "sk", 200, "jan 1");
  window.book2 = new Book("the shining", "sk", 200, "dec 1");
  window.book3 = new Book("The Lightning Thief", "Rick Riordan", 187, "jan 1");
  window.book4 = new Book("The Lost Hero", "Rick Riordan", 376, "dec 1");
  window.book5 = new Book("One Shot", "Lee Child", 231, "jan 1");
  window.book6 = new Book("War and Peace", "Leo Tolstoy", 1225, "1867");
  window.book7 = new Book("The DaVinci Code", "Dan Brown", 296, "jan 1");
  window.book8 = new Book("Harry Potter", "J. K. Rowling", 198, "dec 1");
  window.book9 = new Book("The Mark of Athena", "Rick Riordan", 342, "dec 1");

});
