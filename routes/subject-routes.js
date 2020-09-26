const express = require("express");
const subjectController = require("../controllers/subject-controller");
const router = express.Router();

// /subjects/:id
router.get("/:subject_id", subjectController.index);

module.exports = router;
