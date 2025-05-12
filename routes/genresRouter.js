const { Router } = require("express");
const genresController = require("../controllers/genresController");
const genresRouter = Router();

// Get genre routes
genresRouter.get("/", genresController.getAllGenres);

// Add new genre routes
genresRouter.get("/new", genresController.addNewGenreGet);
genresRouter.post("/new", genresController.addNewGenrePost);

// Dinamic routes
genresRouter.get("/:id", genresController.getGenreById);

module.exports = genresRouter;
