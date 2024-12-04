export class Book {
    constructor(author, bookTitle, status, id) {
      this.id = id;
      this.author = author;
      this.bookTitle = bookTitle;
      this.status = status;
    }
  
    borrow() {
      if (this.status.toLowerCase() == "available") {
        this.status = "borrowed";
        console.log("Book Borrowed Successful");
      } else {
        console.log(`${this.bookTitle} is not available for borrowing`);
      }
    }
  
    returnBook() {
      if (this.status.toLowerCase() == "borrowed") {
        this.status = "available";
        console.log("Book returned Successful");
      } else {
        console.log(`${this.bookTitle} is not borrowed`);
      }
    }
  
    reserved() {
      if (this.status.toLowerCase() == "available") {
        this.status = "reserved";
        console.log("Book reserved Successful");
      } else {
        console.log(`${this.bookTitle} is not available for reserve`);
      }
    }
  }