const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todos',
  password: '',
  port: 5432,
})

//get todos
const getTodo = (request, response) => {
    pool.query('SELECT * FROM todos ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results)
    })
  }
//create todos
const createTodo = (request, response) => {
    const { todo } = request.body
  
    pool.query('INSERT INTO todos (todo) VALUES ($1)', [todo], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(request.body)
    })
  }

  //delete todo
  const deleteTodo = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM todos WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Todo deleted with ID: ${id}`)
    })
  }


module.exports = {
  getTodo,
  createTodo,
  deleteTodo,
}