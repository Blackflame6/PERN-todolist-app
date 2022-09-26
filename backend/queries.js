const getAllTodos = "SELECT * FROM todos";
const getOneTodo = "SELECT * FROM todos WHERE id = $1";
const updateTodo = "UPDATE todos SET description = $1 WHERE id = $2";
const createTodo = "INSERT INTO todos (description) VALUES ()"


module.exports = {
  getAllTodos,
  getOneTodo,
  updateTodo,
};
