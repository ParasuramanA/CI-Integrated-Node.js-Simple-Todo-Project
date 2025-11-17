const TodoService = require("../services/todoService")



class TodoController {
    static async getTodos(req, res) {
        const todos = await TodoService.getAll()
        return res.json(todos)

    }
    static async addTodo(req, res) {
        const todo = await TodoService.create(req.body.title)
        return res.json(todo)
    }

    static async updateTodo(req, res) {
        const todo = await TodoService.update(req.params.id, req.body)
        res.json(todo)
    }

    static async deleteTodo(req, res) {
        await TodoService.delete(req.params.id)
        res.json("todo deleted successully")

    }
}



module.exports = TodoController