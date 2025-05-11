const authorsDB = require("../models/authors");

async function getAllAuthors(req, res) {
	const authors = await authorsDB.getAllAuthors();
	res.render("authors", { authors: authors });
}

async function getAuthorById(req, res) {
	const id = req.params.id;
	const { author, books } = await authorsDB.getAuthorInfoById(id);

	res.render("author", { author: author, books: books });
}

async function addNewAuthorGet(req, res) {
	res.render("addAuthor");
}

async function addNewAuthorPost(req, res) {
	const { author_name } = req.body;
	await authorsDB.addNewAuthor(author_name);
	res.redirect("/authors");
}

module.exports = {
	getAllAuthors,
	getAuthorById,
	addNewAuthorGet,
	addNewAuthorPost,
};
