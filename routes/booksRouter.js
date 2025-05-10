const { Router } = require("express");
const booksController = require("../controllers/booksController");
const booksRouter = Router();

booksRouter.get("/", booksController.getAllBooks);
booksRouter.get("/:id", booksController.getBookById);

module.exports = booksRouter;
