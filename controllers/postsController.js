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

// STORE
const store = function (req, res) {
    const newId = postsData[postsData.length - 1].id + 1;
    
    const newPizza = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
}

    postsData.push(newPizza);
    res.status(201)
    res.json(newPizza);
}

// UPDATE
const update = function (req, res) {
    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 
    post.title = req.body.title
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags
    res.json(post)
}

// MODIFY
const modify = function (req, res) {
    const post = postsData.find((elm) => elm.id == req.params.id)

    if (!post){
       res.sendStatus(404)
    } 


    if(req.body.title){
        post.title = req.body.title
    }
    if(req.body.content){
        post.content = req.body.content
    }
    if(req.body.image){
        post.image = req.body.image
    }
    if(req.body.tag){
        post.tags = req.body.tag
    }

    res.json(post)
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


module.exports = {index, show, store, update, modify, destroy}