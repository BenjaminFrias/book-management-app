const authorsDB = require("../models/authors");

async function getAllAuthors(req, res) {
	const authors = await authorsDB.getAllAuthors();
	res.render("authors", { authors: authors });
}

async function getAuthorById(req, res) {
	const id = req.params.id;
	const author = await authorsDB.getAuthorById(id);

	res.render("author", { author: author });
}

module.exports = { getAllAuthors, getAuthorById };
