const { Router } = require("express");
const booksController = require("../controllers/booksController");
const booksRouter = Router();

// Get books routes
booksRouter.get("/", booksController.getAllBooks);

// Create new book routes
booksRouter.get("/new", booksController.addNewBookGet);
booksRouter.post("/new", booksController.addNewBookPost);

// Dinamic routes
booksRouter.get("/:id", booksController.getBookById);

module.exports = booksRouter;
