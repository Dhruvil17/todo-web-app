import React, { useState } from "react";

const TaskItem = ({ index, task, editTask, deleteTask }) => {
    const [newTask, setNewTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        if (isEditing) {
            editTask(index, newTask);
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    return (
        <div className="flex justify-between items-center space-x-2 p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={handleChange}
                    className="w-2 flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
                />
            ) : (
                <span className="break-words overflow-hidden mr-[2%]">
                    {task}
                </span>
            )}
            <div className="flex space-x-2">
                <button
                    onClick={handleEdit}
                    className={`px-3 py-1 rounded focus:outline-none text-white ${
                        isEditing
                            ? "bg-green-500 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-900"
                            : "bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900"
                    }`}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-900 focus:outline-none">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
