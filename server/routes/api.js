const express = require("express");
const {
    serverHealth,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", serverHealth);
router.get("/api/todos", getTodos);
router.post("/api/todos/create", createTodo);
router.post("/api/todos/update/:todoId", updateTodo);
router.delete("/api/todos/delete/:todoId", deleteTodo);
router.delete("/api/todos/delete", deleteAllTodos);

module.exports = router;
