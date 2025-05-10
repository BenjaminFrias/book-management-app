const booksDB = require("../models/books");

async function getAllBooks(req, res) {
	const books = await booksDB.getAllBooks();

	res.render("books", { books: books });
}

async function getBookById(req, res) {
	const id = req.params.id;
	const book = await booksDB.getBookById(id);
	res.render("book", { book: book });
}

module.exports = { getAllBooks, getBookById };
