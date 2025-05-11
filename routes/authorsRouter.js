const { Router } = require("express");
const authorController = require("../controllers/authorsController");
const authorsRouter = Router();

// Get books routes
authorsRouter.get("/", authorController.getAllAuthors);

// Create new author routes
authorsRouter.get("/new", authorController.addNewAuthorGet);
authorsRouter.post("/new", authorController.addNewAuthorPost);

// Dinamic routes
authorsRouter.get("/:id", authorController.getAuthorById);

module.exports = authorsRouter;
