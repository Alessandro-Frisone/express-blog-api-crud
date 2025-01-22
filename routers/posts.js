const express = require("express")
const router = express.Router()

// IMPORTANZIONE FUNZIONI CONTROLLER
const controller = require("../controllers/postsController")


// IMPORTAZIONE MIDDLEWARE
const middleware = require("../middleware/validatorString")
// ISTRUISCO I MIDDLEWARE
router.use('/:id', middleware.middlewareErrorString)


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