const pool = require("../config/database");

async function getAllBooks() {
	const { rows } = await pool.query("SELECT * FROM books;");
	return rows;
}

async function getBookById(id) {
	const { rows } = await pool.query(
		`
        SELECT books.*, authors.name AS author_name, genres.name AS genre_name
        FROM books
        JOIN authors ON books.author_id=authors.id
        JOIN genres ON books.genre_id=genres.id
        WHERE books.id = ($1)
        `,
		[id]
	);

	if (rows.length > 0) {
		return rows[0];
	} else {
		return null;
	}
}

async function createBook() {
	return;
}

async function deleteBook() {
	return;
}

async function updateBook() {
	return;
}

module.exports = {
	getAllBooks,
	getBookById,
	createBook,
	deleteBook,
	updateBook,
};
