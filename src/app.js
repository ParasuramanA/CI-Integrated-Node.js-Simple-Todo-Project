const express = require("express")

const cros = require("cors")

const todoRoutes = require("./routes/todoRoutes")
const sequelize = require("./config/database")
const morgan = require("morgan")


const app = express()

app.use(cros())

app.use(express.json())

app.use(morgan("dev"))

app.use("/api/todos",todoRoutes);

sequelize.sync().then(()=>console.log("database running"))


module.exports = app