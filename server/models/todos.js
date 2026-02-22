const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        status: { type: String },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: {
            createdAt: "createdDate",
            updatedAt: "updatedDate",
        },
    },
);

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
