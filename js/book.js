function Book(title, author, numPages, pubDate)
{
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};

Book.prototype.editBook = function(oBook)
{
  if (oBook.hasOwnProperty('title')) {
    this.title = oBook.title;
  }

  if (oBook.hasOwnProperty('author')) {
    this.author = oBook.author;
  }

  if (oBook.hasOwnProperty('numPages')) {
    this.numPages = oBook.numPages;
  }

  if (oBook.hasOwnProperty('pubDate')) {
    this.pubDate = oBook.pubDate;
  }

  return this;
};
