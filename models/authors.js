const pool = require("../config/database");

async function getAllAuthors() {
	const { rows } = await pool.query("SELECT * FROM authors;");
	return rows;
}

async function getAuthorInfoById(id) {
	const author = await pool.query("SELECT * FROM authors WHERE id=($1);", [id]);

	if (!author.rows) {
		return null;
	}

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

	if (rows.length < 1) {
		return { author: author.rows[0], author_books: [] };
	}

	const authorData = {
		author: {
			id: rows[0].id,
			name: rows[0].name,
		},
		books: [],
	};

	for (let book of rows) {
		const singleBook = {
			title: book.title,
			publication_year: book.publication_year,
			genre_name: book.genre_name,
		};
		authorData.books.push(singleBook);
	}

	return authorData;
}

async function addNewAuthor(name) {
	await pool.query(
		`
		INSERT INTO authors (name)
		VALUES ($1);
		`,
		[name]
	);
	return;
}

module.exports = {
	getAllAuthors,
	getAuthorInfoById,
	addNewAuthor,
};
