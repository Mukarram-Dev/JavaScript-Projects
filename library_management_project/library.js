export class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`${book.bookTitle} Book added Successfully`);
  }
  removeBook(id) {
    let bookIndex = this.books.findIndex((element) => element.id == id);
    if (bookIndex != -1) {
      console.log(`${this.books[bookIndex].bookTitle} has been removed`);
      this.books.splice(bookIndex, 1);
    } else {
      console.log(`book not found`);
    }
  }
  updateBook(book) {
    let bookIndex = this.books.findIndex((element) => element.id == book.id);
    if (bookIndex != -1) {
      this.books[bookIndex] = book;
      console.log(`${book.bookTitle} Book updated Successfully`);
    } else {
      console.log(`book not found`);
    }
  }
  searchBook(title) {
    let book = this.books.find(
      (element) => element.bookTitle == title || element.author == title
    );
    if (book) {
      console.log(`Book found: ${book.bookTitle} by ${book.author}`);
    } else {
      console.log(`${title} not found in the library.`);
    }
  }

  viewBooks() {
    if (this.books.length === 0) {
      console.log("No books in the library.");
      return;
    }

    console.log("\nBooks in the Library:");
    this.books.forEach((book) => {
      console.log(
        `\nID: ${book.id}, Title: ${book.bookTitle}, Author: ${book.author}, Status: ${book.status}`
      );
    });
  }

  showMenu() {
    console.log("\nLibrary Management System");
    console.log("1. Add a book");
    console.log("2. Remove a book");
    console.log("3. Search for a book");
    console.log("4. List all books");
    console.log("5. Borrow a book");
    console.log("6. Return a book");
    console.log("7. Reserve a book");
    console.log("8. Exit");
  }
}
