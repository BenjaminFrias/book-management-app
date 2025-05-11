const pool = require("../config/database");

async function getAllBooks() {
	const { rows } = await pool.query("SELECT * FROM books;");
	return rows;
}

async function getBookById(id) {
	const { rows } = await pool.query(
		`
        SELECT books.*, authors.name AS author_name, authors.id AS author_id, genres.name AS genre_name, genres.id AS genre_id
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

async function addNewBook(title, authorId, genreId, publication_year) {
	await pool.query(
		`
		INSERT INTO books (title, author_id, genre_id, publication_year)
		VALUES ($1, $2, $3, $4);
		`,
		[title, authorId, genreId, publication_year]
	);
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
	addNewBook,
	deleteBook,
	updateBook,
};
