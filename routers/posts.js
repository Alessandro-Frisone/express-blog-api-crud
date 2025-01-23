const express = require("express")
const router = express.Router()

// IMPORTANZIONE FUNZIONI CONTROLLER
const controller = require("../controllers/postsController")
// IMPORTAZIONE MIDDLEWARE
const middleware = require("../middleware/validatorString")


// ISTRUISCO I MIDDLEWARE
router.use('/:id', middleware.middlewareErrorString)
// ISTRUISCO LA LETTURA DEL BODY_PARSER
router.use(express.json());

// Index
router.get('/', controller.index);

// Show
router.get('/:id', controller.show);

// Store
router.post('/', controller.store);

// Update
router.put('/:id', controller.update);

// Modify
router.patch('/:id', controller.update);

// Destroy
router.delete('/:id', controller.destroy);

module.exports = router