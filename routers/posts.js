const express = require("express")
const router = express.Router()

// IMPORTAZIONE ARRAY POSTS
const postsData = require("../allPosts")

// Index
router.get('/', function (req, res) {
    res.json(`Lista dei post`); 
});

// Show
router.get('/:id', function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }

    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    }   
    res.json(`Dettagli di un post ${req.params.id}`);
});

// Create
router.post('/', function (req, res) {
    res.json(`Creazione nuovo post`);
});

// Update
router.put('/:id', function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }

    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Modifica integrale del post ${req.params.id} `);
});

// Modify
router.patch('/:id', function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }

    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Modifica parziale del post ${req.params.id} `);
});

// Delete
router.delete('/:id', function (req, res) {
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    }

    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Eliminazione del post ${req.params.id} `);
});

module.exports = router