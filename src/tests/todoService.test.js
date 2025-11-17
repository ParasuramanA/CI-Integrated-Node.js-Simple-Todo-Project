const TodoService = require("../services/todoService");
const Todo = require("../model/Todo");

// Mock Sequelize model
jest.mock("../model/Todo");

describe("TodoService", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getAll should return all todos", async () => {
    const mockTodos = [{ id: 1, title: "Test Todo" }];
    Todo.findAll.mockResolvedValue(mockTodos);

    const todos = await TodoService.getAll();
    expect(todos).toEqual(mockTodos);
    expect(Todo.findAll).toHaveBeenCalledWith({ order: [["created_at", "DESC"]] });
  });

  test("create should add a new todo", async () => {
    const newTodo = { id: 1, title: "New Todo" };
    Todo.create.mockResolvedValue(newTodo);

    const result = await TodoService.create("New Todo");
    expect(result).toEqual(newTodo);
    expect(Todo.create).toHaveBeenCalledWith({ title: "New Todo" });
  });

test("update should return updated todo", async () => {
  const updatedTodo = { id: 1, title: "Updated Todo" };
  Todo.update.mockResolvedValue([1]); 
  Todo.findOne.mockResolvedValue(updatedTodo);

  const result = await TodoService.update(1, { title: "Updated Todo" });

  expect(result).toEqual(updatedTodo);
});


 test("delete should return the number of deleted rows", async () => {
  Todo.destroy.mockResolvedValue(1);

  const result = await TodoService.delete(1);

  expect(result).toBe(1);
});

});
