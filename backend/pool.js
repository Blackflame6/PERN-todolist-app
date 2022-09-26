const { Pool } = require ('pg')

const pool  = new Pool ({
  user: "franklynumeh",
  host: "localhost",
  database: "mytodolist",
  password: "",
  port: 5432,
})

module.exports  = pool