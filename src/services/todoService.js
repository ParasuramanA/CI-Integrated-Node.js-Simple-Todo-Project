const Todo = require("../model/Todo")


class TodoService {
    static async getAll(){
        return await Todo.findAll({order:[["created_at","DESC"]]})
    }
    static async create(title){
        return await Todo.create({title})

    }

    static async update(id,data){
        await Todo.update(data,{where:{id}})
         const updatedTodo = await Todo.findOne({ where: { id } });
          return updatedTodo
    } 

    static async delete(id){
        return await Todo.destroy({where:{id}})

    }
}


module.exports = TodoService