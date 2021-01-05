
// new todo api
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const { Sequelize } = require('sequelize')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//todos
app.post('/todos', db.createTodo)
app.get('/todos', db.getTodo)
app.delete('/todos/:id', db.deleteTodo)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


