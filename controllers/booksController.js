const booksDB = require("../models/books");
const genresDB = require("../models/genres");
const authorsDB = require("../models/authors");

async function getAllBooks(req, res) {
	const books = await booksDB.getAllBooks();

	res.render("books", { books: books });
}

async function getBookById(req, res) {
	const id = req.params.id;
	const book = await booksDB.getBookById(id);
	res.render("book", { book: book });
}

async function addNewBookGet(req, res) {
	const genres = await genresDB.getAllGenres();
	const authors = await authorsDB.getAllAuthors();

	res.render("addBook", { genres: genres, authors: authors });
}

async function addNewBookPost(req, res) {
	const { title, authorId, genreId, publication_year } = req.body;
	await booksDB.addNewBook(title, authorId, genreId, publication_year);
	res.redirect("/books/");
}

module.exports = { getAllBooks, getBookById, addNewBookGet, addNewBookPost };
