// IMPORTO L'ARRAY DEI POST
const { Router } = require("express");
const postsData = require("../data/allPosts")



// INDEX
const index = function (req, res) {
    let postsFiltered = postsData
    const { tag } = req.query
    if (tag) {
        postsFiltered = postsFiltered.filter((post) => 
            post.tags.includes(tag)
        )
    }
    res.json(postsFiltered); 
};

// SHOW
const show = function (req, res,) {
    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    }   
    res.json(post);
}

// CREATE
const create = function (req, res) {
    res.json(`Creazione nuovo post`);
}

// UPDATE
const update = function (req, res) {
    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Modifica integrale del post ${req.params.id} `);
}

// MODIFY
const modify = function (req, res) {
    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 
    res.json(`Modifica parziale del post ${req.params.id} `);
}

// DESTROY
const destroy = function (req, res) {
    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 
    postsData.splice(postsData.indexOf(post), 1)
    console.log(postsData)
    res.sendStatus(204)
}


module.exports = {index, show, create, update, modify, destroy}