import { useState } from "react";
import Date from "./components/Date";
import Heading from "./components/Heading";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import DarkMode from "./components/DarkMode";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (index, newTask) => {
        const updatedTask = tasks.map((task, i) =>
            i === index ? newTask : task
        );
        setTasks(updatedTask);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleClick = () => {
        setTasks([]);
    };

    return (
        <div className="px-[2%] py-[25%] sm:py-[15%] md:py-[10%] lg:py-[5%] bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white flex items-start justify-center min-h-screen">
            <div className="bg-white dark:bg-[#2d3748] p-4 sm:p-6 rounded-xl shadow-xl w-full max-w-md">
                <Heading />
                <div className="flex justify-between">
                    <Date />
                    <DarkMode />
                </div>
                <AddTask addTask={addTask} />
                <TaskList
                    tasks={tasks}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
                {tasks.length !== 0 && (
                    <button
                        onClick={handleClick}
                        className="bg-red-500 mt-[8%] mb-[2%] text-white px-3 py-1 rounded hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-900 focus:outline-none">
                        Delete all Tasks
                    </button>
                )}
            </div>
        </div>
    );
};

export default App;
