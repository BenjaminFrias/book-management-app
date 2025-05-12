const genresDB = require("../models/genres");

async function getAllGenres(req, res) {
	const genres = await genresDB.getAllGenres();
	res.render("genres", { genres: genres });
}

async function getGenreById(req, res) {
	const id = req.params.id;
	const { genre, books } = await genresDB.getGenreById(id);

	res.render("genre", { genre: genre, books: books });
}

async function addNewGenreGet(req, res) {
	res.render("addGenre");
}

async function addNewGenrePost(req, res) {
	const { genre_name } = req.body;
	await genresDB.addNewGenre(genre_name);
	res.redirect("/genres");
}

module.exports = {
	getAllGenres,
	getGenreById,
	addNewGenreGet,
	addNewGenrePost,
};
