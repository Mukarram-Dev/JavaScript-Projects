class Book {
  constructor(author, bookTitle, status, id) {
    this.id = id;
    this.author = author;
    this.bookTitle = bookTitle;
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

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    logPrint(`${book.bookTitle} Book added Successfully`);
  }
  removeBook(id) {
    let bookIndex = this.books.findIndex((element) => element.id == id);
    if (bookIndex != -1) {
      this.books.splice(bookIndex, 1);
      logPrint(`${this.books[bookIndex].bookTitle} has been removed`);
    } else {
      logPrint(`book not found`);
    }
  }
  updateBook(book) {
    let bookIndex = this.books.findIndex((element) => element.id == book.id);
    if (bookIndex != -1) {
      this.books[bookIndex] = book;
      logPrint(`${book.bookTitle} Book updated Successfully`);
    } else {
      logPrint(`book not found`);
    }
  }
  searchBook(title) {
    let book = this.books.find((element) => element.title == title);
    if (book) {
      console.log(`Book found: ${book.title} by ${book.author}`);
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
        `ID: ${book.id}, Title: ${book.bookTitle}, Author: ${book.author}, Status: ${book.status}`
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

function customPrompt(message, time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const input = prompt(message);
      resolve(input);
    }, time); // Simulate a 3-second delay
  });
}

async function main() {
  const library = new Library();
  const book= new Book();
  while (true) {
    library.showMenu();
    const choice = await customPrompt("Enter your choice (1-5):", 3000);

    switch (choice) {
      case "1":
        const id = await customPrompt("Enter book ID:");
        const title = await customPrompt("Enter book title:");
        const author = await customPrompt("Enter book author:");
        const status = await customPrompt("Enter book status:");
        const book = new Book(author, title, status, id);
        library.addBook(book);
        break;

      case "2":
        const bookId = await customPrompt("Enter book ID to remove:");
        library.removeBook(bookId);
        break;

      case "3":
        const query = await customPrompt("Enter title or author to search:");
        library.searchBook(query);
        break;

      case "4":
        library.viewBooks();
        break;
      case "5":
        
        library.viewBooks();
        break;

      case "8":
        console.log("Exiting the Library Management System. Goodbye!");
        return;

      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  }
}

function logPrint(msg) {
  console.log(msg);
}

main();
