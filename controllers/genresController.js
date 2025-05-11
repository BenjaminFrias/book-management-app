const genresDB = require("../models/genres");

async function getAllGenres(req, res) {
	const genres = await genresDB.getAllGenres();
	res.render("genres", { genres: genres });
}

async function getGenreById(req, res) {
	const id = req.params.id;
	const genre = await genresDB.getGenreById(id);
	res.render("genre", { genre: genre });
}

module.exports = { getAllGenres, getGenreById };
