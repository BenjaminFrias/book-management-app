const pool = require("../config/database");

async function getAllGenres() {
	const { rows } = await pool.query("SELECT * FROM genres;");
	return rows;
}

async function getGenreById(id) {
	const genre = await pool.query(
		`
			SELECT id, name FROM genres
			WHERE id = ($1);
		`,
		[id]
	);

	if (!genre.rows) {
		return null;
	}

	const booksByGenre = await pool.query(
		`
        SELECT title, id
		FROM books WHERE books.genre_id=($1);
        `,
		[id]
	);

	if (booksByGenre.length < 1) {
		return { genre: genre.name, genre_books: [] };
	}

	const genreData = {
		genre: {
			id: genre.rows[0].id,
			name: genre.rows[0].name,
		},
		books: [],
	};

	for (let book of booksByGenre.rows) {
		const singleBook = {
			id: book.id,
			title: book.title,
		};
		genreData.books.push(singleBook);
	}

	return genreData;
}

async function addNewGenre(name) {
	await pool.query(
		`
		INSERT INTO genres (name)
		VALUES ($1);
		`,
		[name]
	);
	return;
}

module.exports = { getAllGenres, getGenreById, addNewGenre };
