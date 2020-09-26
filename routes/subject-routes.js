const express = require("express");
const subjectController = require("../controllers/subject-controller");
const router = express.Router();

// /subjects/:id
router.get("/", subjectController.index);
router.get("/:subject_id", subjectController.show);

module.exports = router;
