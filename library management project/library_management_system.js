class Book {
  constructor(author, bookTitle, published, status) {
    this.author = author;
    this.bookTitle = bookTitle;
    this.published = published;
    this.status = status;
  }

  borrow() {
    if (this.status == "available") {
      this.status = "borrowed";
      logPrint("Book Borrowed Successful");
    } else {
      logPrint(`${this.bookTitle} is not available for borrowing`);
    }
  }

  returnBook() {

    if (this.status == "borrowed") {
        this.status = "available";
        logPrint("Book returned Successful");
      } else {
        logPrint(`${this.bookTitle} is not borrowed`);
      }

  }

  reserved() {
    if (this.status == "available") {
      this.status = "reserved";
      logPrint("Book reserved Successful");
    } else {
      logPrint(`${this.bookTitle} is not available for reserve`);
    }
  }
}

function logPrint(msg) {
  console.log(msg);
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {}
}
