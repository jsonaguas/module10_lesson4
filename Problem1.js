function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;


}
Book.prototype.bookInfo = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages";
    }
// Task 3: Array to store book objects and functions to add/search books
const library = [];

// Function to add a new book to the library
function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}

// Function to search for books by title or author
function searchBooks(bookSearch) {
    return library.filter(book => 
        book.title.toLowerCase().includes(bookSearch.toLowerCase()) || 
        book.author.toLowerCase().includes(bookSearch.toLowerCase())
    );
}

// Task 4: Functions to filter and map books
// Function to filter out books with more than 100 pages
function filterBooksByPages() {
    return library.filter(function(book) {
        return book.pages >= 100;
    });
}

// Function to add "Title: " and "Author: " to the book's title and author properties
function formatBookDetails() {
    return library.map(book => ({
        Title: book.title,
        Author: book.author,
        Pages: book.pages
    }));
}

const book1 = new Book("The Hunger Games", "Suzanne Collins", 384);
const book2 = new Book("Catching Fire", "Suzanne Collins", 400);
const book3 = new Book("Mockingjay", "Suzanne Collins", 390);



addBook(book1.title, book1.author, book1.pages);
addBook(book2.title, book2.author, book2.pages);
addBook(book3.title, book3.author, book3.pages);


console.log(searchBooks("hunger"));
console.log(formatBookDetails());

