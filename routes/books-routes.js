const express = require("express");
const booksController = require("../controllers/books-controller");
const router = express.Router();

// These routes are for rendering pages
router.get("/", booksController.index);
router.get("/add", booksController.add);
router.get("/:book_id", booksController.show);
router.get("/:book_id/edit", booksController.edit);

// These routes are for API requests
router.post("/add", booksController.create);
router.delete("/:book_id", booksController.destroy);
router.put("/:book_id", booksController.update);

module.exports = router;
