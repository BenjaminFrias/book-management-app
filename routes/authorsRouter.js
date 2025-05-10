const { Router } = require("express");
const authorController = require("../controllers/authorsController");
const authorsRouter = Router();

authorsRouter.get("/", authorController.getAllAuthors);
authorsRouter.get("/:id", authorController.getAuthorById);

module.exports = authorsRouter;
