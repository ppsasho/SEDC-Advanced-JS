let body = (document.getElementsByTagName("body")[0].style.backgroundColor =
  "#5a7ead");
class Book {
  constructor(title, publicationYear, author) {
    (this.title = title),
      (this.publicationYear = publicationYear),
      (this.author = author);
  }
  set title(title) {
    typeof title === "string" && title.trim()
      ? (this._title = title)
      : console.error("Invalid title, must be a string!");
  }
  set publicationYear(publicationYear) {
    typeof publicationYear === "number" && publicationYear > 0
      ? (this._publicationYear = publicationYear)
      : console.error("Publication year is invalid!");
  }
  getBookInfo() {
    console.log(
      `${this.title}, by ${this.author} was released ${this.publicationYear}.`
    );
  }
  assignNewBookToAuthor() {
    this.author.addBook(this);
  }
  publishBook() {
    this.author
      ? this.author.addBook(this)
      : console.log("That book ain't right");
  }
}

class Author {
  constructor(name, books = []) {
    (this.name = name), (this.books = books);
  }
  addBook(book) {
    this.books.push(book);
  }
  set books(books) {
    this._books = books.filter((book) => book instanceof Book);
  }
  set name(name) {
    typeof name === "string" && name.trim() !== "" && name.length > 2
      ? (this._name = name)
      : console.error("The name is invalid!");
  }
  publishNewBook(title, publicationYear) {
    const newBook = new Book(title, publicationYear, this);
    newBook.assignNewBookToAuthor();
  }
}

const author1 = new Author("Cool author", ["book1", "book2"]);
const book1 = new Book("Cool title", 1994, author1);
const coolBook = new Book("cooler book", 2000, author1);
author1.publishNewBook("cool boy", 1969);
