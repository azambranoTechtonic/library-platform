
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
  var isAdded = true;

  if (this.checkBookByTitle(book.title).length < 1) {
    this.bookShelf.push(book);
  } else {
    isAdded = false;
  }

  return isAdded; //True if not already added - false if it already added
};

Library.prototype.removeBookByTitle = function(title)
{
  // Remove books from bookShelf matching title

  var isDeleted = false;
  var posBook = this.checkBookByTitle(title);

  for (var i = 0;i < posBook.length;i++) {
    var nPos = this.checkBookByTitle(title);
    this.bookShelf.splice(nPos[0],1);
    isDeleted = true;
  }

  return isDeleted; //true if book is removed - false if theres no match
};

Library.prototype.removeBookByAuthor = function(author)
{
  // Remove books from bookShelf matching author's name

  var isDeleted = false;
  var posBook = this.checkBookByAuthor(author);

  for (var i = 0;i < posBook.length;i++) {
    var nPos = this.checkBookByAuthor(author);
    this.bookShelf.splice(nPos[0],1);
    isDeleted = true;
  }

  return isDeleted; //true if book is removed - false if theres no match
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
  var arrBooks = [];
  var lowercaseTitle;
  var lowercaseBsTitle;

  for (var i = 0;i < this.bookShelf.length;i++) {

    lowercaseTitle = title.toLowerCase();
    lowercaseBsTitle = this.bookShelf[i].title.toLowerCase();

    if (lowercaseBsTitle.includes(lowercaseTitle)) {
      arrBooks.push(this.bookShelf[i]);
    }
  }
  return arrBooks; //Books array
};

Library.prototype.getBookByAuthor = function(author)
{
  // Select books from bookShelf Completely or Partially matching Author name
  var arrBooks = [];
  var lowercaseAuthor;
  var lowercaseBsAuthor;

  // Loop through bookShelf
  for (var i = 0;i < this.bookShelf.length;i++) {

    //Convert to lowercase both the autohr parameter and the author stored in bookShelf
    lowercaseAuthor = author.toLowerCase();
    lowercaseBsAuthor = this.bookShelf[i].author.toLowerCase();

    //Verifies if then parameter is included in then stored title in bookShelf
    if (lowercaseBsAuthor.includes(lowercaseAuthor)) {
      //If matches then pushes into books array
      arrBooks.push(this.bookShelf[i]);
    }
  }
  return arrBooks; //returns Books array
};

Library.prototype.getBookByNumPages = function(numPages)
{
  // Select books from bookShelf Completely matching numPages
  var arrBooks = [];

  for (var i = 0;i < this.bookShelf.length;i++) {

    if (this.bookShelf[i].numPages === numPages) {
      arrBooks.push(this.bookShelf[i]);
    }
  }
  return arrBooks; //Books array
};

Library.prototype.getBookByPubDate = function(pubDate)
{
  // Select books from bookShelf Completely matching numPages
  var arrBooks = [];

  for (var i = 0;i < this.bookShelf.length;i++) {
    if (this.bookShelf[i].pubDate.includes(pubDate)) {
      arrBooks.push(this.bookShelf[i]);
    }
  }
  return arrBooks; //Books array
};

Library.prototype.getAllBooks = function()
{
  // Select All books from bookShelf

  return this.bookShelf; //Books array

};

Library.prototype.searchByAnyProperty = function(oBook)
{
  var foundTitle = [];
  var foundAuthor = [];
  var foundNumPages = [];
  var foundPubDate = [];
  var foundResult = [];


  if (oBook.hasOwnProperty('title')) {
    foundTitle = this.getBookByTitle(oBook.title);
  }

  if (oBook.hasOwnProperty('author')) {
    foundAuthor = this.getBookByAuthor(oBook.author);
  }

  if (oBook.hasOwnProperty('numPages')) {
    foundNumPages = this.getBookByNumPages(oBook.numPages);
  }

  if (oBook.hasOwnProperty('pubDate')) {
    foundPubDate = this.getBookByPubDate(oBook.pubDate);
  }

  foundResult = foundTitle.concat(foundAuthor, foundNumPages, foundPubDate);


  var unique_array = []
  for(let i = 0;i < foundResult.length; i++){
    if(unique_array.indexOf(foundResult[i]) == -1){
        unique_array.push(foundResult[i])
    }
  }

  return unique_array;
};

Library.prototype.addBooks = function(books)
{
  // Adds books from Books array into bookShelf
  var numBooks = 0;

  for (var i = 0;i < books.length;i++) {

    if (this.addBook(books[i])) {
     //Increase the Books counter
     numBooks = numBooks + 1;
    }

  }

  return numBooks; //Number of Books added to bookShelf
};

Library.prototype.getAuthors = function()
{
  // Select distinct authorName from bookShelf

  var authors = [];
  var shouldAdd = true;

  for (var i = 0;i < this.bookShelf.length;i++) {

    if (authors.length === 0) {
      authors.push(this.bookShelf[i].author);
    } else {
      shouldAdd = true;
      for (var j = 0;j < authors.length;j++) {
       if (this.bookShelf[i].author === authors[j]) {
        shouldAdd = false;
       }
      }
      if (shouldAdd) {
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

  //convert JSON bookShelf into a string
  var dehydratedBookShelf = JSON.stringify(this.bookShelf);

  //save it with local storage
  window.localStorage.setItem('bookShelf', dehydratedBookShelf);

  return true;
};

Library.prototype.restoreBookShelf = function()
{
  // Restore bookShelf from Local Storage

  this.bookShelf = [];

  //get 'bookShelf' and rehydrate it  (convert it back JSON)
  var rehydratedBookShelf = JSON.parse(window.localStorage.getItem('bookShelf'));

  for (var i = 0;i < rehydratedBookShelf.length;i++) {

    this.addBook(new Book(rehydratedBookShelf[i]));

  }

  return this.bookShelf;
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
  window.book10 = new Book("Harry Potter", "J. K. Rowling", 200, "dec 1");

});
