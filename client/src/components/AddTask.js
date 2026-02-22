import React from "react";
import { useState } from "react";

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        addTask(task);
        setTask("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex my-5 space-x-2">
                <input
                    required
                    type="text"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className="flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
                    placeholder="Add a new item"
                />
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTask;
