const pool = require("./backend/pool");
const controller = require("./backend/controller")
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
app.use(express.static("public"));


app.get("/todos/", controller.getAllTodos)




app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});



