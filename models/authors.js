const pool = require("../config/database");

async function getAllAuthors() {
	const { rows } = await pool.query("SELECT * FROM authors;");
	return rows;
}

async function getAuthorById(id) {
	const { rows } = await pool.query(
		`
        SELECT authors.*, books.*, genres.name AS genre_name
		FROM authors
		JOIN books ON authors.id=books.author_id
		JOIN genres ON books.genre_id=genres.id
		WHERE authors.id = ($1);
        `,
		[id]
	);

	if (rows.length > 0) {
		return rows;
	} else {
		return null;
	}
}

module.exports = { getAllAuthors, getAuthorById };
