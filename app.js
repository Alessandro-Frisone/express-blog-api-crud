const express = require('express')
const app = express()
const port = 3000


// IMPORTAZIONE MODULO CREATO DA ME
const postsRouter = require("./routers/posts")

// MIDDLEWARE
app.use(express.static('public'))

// ISTRUISCO L'APP
app.use('/bacheca', postsRouter)


app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json()
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
