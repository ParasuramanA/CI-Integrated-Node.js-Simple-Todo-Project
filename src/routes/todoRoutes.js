const express = require("express")
const router = express.Router()

const TodoController = require("../controller/todoController");


router.get("/",TodoController.getTodos)
router.post("/",TodoController.addTodo)
router.put("/:id",TodoController.updateTodo)
router.delete("/:id",TodoController.deleteTodo)


module.exports = router