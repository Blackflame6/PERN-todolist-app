const pool = require ('./pool')
const queries = require ('./queries')

const getAllTodos = async (req, res) =>{
  try {
    const { rows } = await pool.query(queries.getAllTodos)
    res.status(200).send(rows)
  } catch (err) {
    console.error(err.message)
  }
}


module.exports = {
  getAllTodos
}