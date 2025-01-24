const express = require('express')
const app = express()
const port = 3000


// IMPORTAZIONE MODULO CREATO DA ME
const postsRouter = require("./routers/posts")
// IMPORTAZIONE GESTIONE ERRORI
const validatorFound = require("./middleware/validatorFound")
const validatorError = require("./middleware/validatorError")

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

app.use(validatorFound)
app.use(validatorError)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
