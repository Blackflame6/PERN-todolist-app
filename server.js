const pool = require("./backend/pool");
const controller = require("./backend/controller");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4500;

connect();

function connect() {
  try {
    console.log(`${pool.options.database} database: connection successful`);
  } catch (error) {
    console.error(error.message);
  }
}

app.use(express.json());
app.use(cors());
// app.use(express.static("public"));

app.get("/todos/", controller.getAllTodos);
app.get("/todos/:id", controller.getOneTodo);
app.patch("/todos/:id", controller.updateTodo);
app.post("/todos/", controller.createTodo);
app.delete("/todos/:id", controller.removeTodo);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
