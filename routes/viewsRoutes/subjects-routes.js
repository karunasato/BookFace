const express = require('express')
const subjectsController = require('../../controllers/subjects-controller')
const router = express.Router()

// These routes are for rendering pages
router.get('/', subjectsController.index)
router.get('/add', subjectsController.add)
router.get('/:subject_id', subjectsController.show)
router.get('/:subject_id/edit', subjectsController.edit)

// These routes are for API requests
router.post('/', subjectsController.create)
router.delete('/:subject_id', subjectsController.destroy)
router.put('/:subject_id', subjectsController.update)

module.exports = router
