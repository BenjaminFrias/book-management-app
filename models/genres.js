const pool = require("../config/database");

async function getAllGenres() {
	const { rows } = await pool.query("SELECT * FROM genres;");
	return rows;
}

async function getGenreById(id) {
	const { rows } = await pool.query(
		`
        SELECT genres.name AS genre_name, books.title AS book_title, books.id AS book_id
		FROM genres
		JOIN books ON genres.id=books.genre_id
		WHERE genres.id = ($1);
        `,
		[id]
	);

	if (rows.length > 0) {
		return rows;
	} else {
		return null;
	}
}

module.exports = { getAllGenres, getGenreById };
