const Todo = require("../models/todos");

function serverHealth(req, res) {
    console.log("Get route of server called");
    res.send("Hello from the Server");
}

async function getTodos(req, res) {
    try {
        const data = await Todo.find({ isDeleted: false });
        if (!data) {
            return res.status(400).json({
                success: false,
                message: "Please create Todo item",
            });
        }

        return res.status(200).json({
            success: true,
            data: data,
            message: "Todo items fetched successfully",
        });
    } catch (error) {
        console.log("Error in getTodos function ", error);
        return res.status(500).json({
            success: false,
            error: "Error in getTodos function",
        });
    }
}

async function createTodo(req, res) {
    try {
        let { name } = req.body;
        name = name.trim();

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Todo item not found",
            });
        }

        const todo = await Todo.findOne({ name: name });
        if (todo) {
            return res.status(400).json({
                success: false,
                message: "Todo item is already added",
            });
        }

        await Todo.create({ name: name });

        return res.status(200).json({
            success: true,
            message: "Todo item added successfuly",
        });
    } catch (error) {
        console.log("Error in createTodo function ", error);
        return res.status(500).json({
            success: false,
            message: "Error in createTodo function",
        });
    }
}

async function updateTodo(req, res) {
    try {
        const { todoId } = req.params;
        let { name } = req.body;
        name = name.trim();

        const todoItem = await Todo.findById(todoId);
        if (!todoItem) {
            return res.status(400).json({
                success: false,
                message: "Todo Item not found",
            });
        }

        const updatedItem = await Todo.findOneAndUpdate(
            { _id: todoId },
            { $set: { name: name } },
            { new: true },
        );

        return res.status(200).json({
            success: true,
            data: updatedItem,
            message: "Todo Item updated successfully",
        });
    } catch (error) {
        console.log("Error in updateTodo function ", error);
        return res.status(500).json({
            success: false,
            message: "Error in updateTodo function",
        });
    }
}

async function deleteTodo(req, res) {
    try {
        const { todoId } = req.params;

        const todoItem = await Todo.findById(todoId);
        if (!todoItem) {
            return res.status(400).json({
                success: false,
                message: "Todo Item not found",
            });
        }

        await Todo.updateOne({ _id: todoId }, { $set: { isDeleted: true } });

        return res.status(200).json({
            success: true,
            message: "Todo Item deleted successfully",
        });
    } catch (error) {
        console.log("Error in deleteTodo function ", error);
        return res.status(500).json({
            success: false,
            message: "Error in deleteTodo function",
        });
    }
}

async function deleteAllTodos(req, res) {
    try {
        const todoItem = await Todo.find({});
        if (!todoItem) {
            return res.status(400).json({
                success: false,
                message: "Todo Item not found",
            });
        }

        await Todo.updateMany({}, { isDeleted: true });

        return res.status(200).json({
            success: true,
            message: "Todo Item deleted successfully",
        });
    } catch (error) {
        console.log("Error in deleteAllTodos function ", error);
        return res.status(500).json({
            success: false,
            message: "Error in deleteAllTodos function",
        });
    }
}

module.exports = {
    serverHealth,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos,
};
