const express = require("express")
const router = express.Router()

// IMPORTANZIONE FUNZIONI CONTROLLER
const controller = require("../controllers/postsController")


// Index
router.get('/', controller.index);

// Show
router.get('/:id', controller.show);

// Create
router.post('/', controller.create);

// Update
router.put('/:id', controller.update);

// Modify
router.patch('/:id', controller.update);

// Destroy
router.delete('/:id', controller.destroy);

module.exports = router