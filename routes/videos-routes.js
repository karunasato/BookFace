const express = require("express");
const videosController = require("../controllers/videos-controller");
const router = express.Router();

// These routes are for rendering pages
router.get("/", videosController.index);
router.get("/add", videosController.add);
router.get("/:video_id", videosController.show);
router.get("/:video_id/edit", videosController.edit);

// These routes are for API requests
router.post("/add", videosController.create);
router.delete("/:video_id", videosController.destroy);
router.put("/:video_id", videosController.update);

module.exports = router;
