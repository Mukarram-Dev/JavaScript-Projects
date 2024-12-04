import readline from "readline/promises";
import { Book } from "./book.js";
import { Library } from "./library.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const library = new Library();
  while (true) {
    library.showMenu();
    const choice = await rl.question("Enter your choice (1-8): ");

    switch (choice) {
      case "1":
        const id = await rl.question("Enter book ID: ");
        const title = await rl.question("Enter book title: ");
        const author = await rl.question("Enter book author: ");
        const status = "available";
        library.addBook(new Book(author, title,status , id));
        break;

      case "2":
        const removeId = await rl.question("Enter book ID to remove: ");
        library.removeBook(removeId);
        break;

      case "3":
        const query = await rl.question("Enter title or author to search: ");
        library.searchBook(query);
        break;

      case "4":
        library.viewBooks();
        break;

      case "5":
        const borrowId = await rl.question("Enter book ID to borrow: ");
        const borrowBook = library.books.find(book => book.id === borrowId);
        if (borrowBook) {
          borrowBook.borrow();
        } else {
          console.log(`Book with ID ${borrowId} not found.`);
        }
        break;

      case "6":
        const returnId = await rl.question("Enter book ID to return: ");
        const returnBook = library.books.find(book => book.id === returnId);
        if (returnBook) {
          returnBook.returnBook();
        } else {
          console.log(`Book with ID ${returnId} not found.`);
        }
        break;

      case "7":
        const reserveId = await rl.question("Enter book ID to reserve: ");
        const reserveBook = library.books.find(book => book.id === reserveId);
        if (reserveBook) {
          reserveBook.reserved();
        } else {
          console.log(`Book with ID ${reserveId} not found.`);
        }
        break;

      case "8":
        console.log("Exiting the Library Management System. Goodbye!");
        rl.close();
        return;

      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  }
}

main();
