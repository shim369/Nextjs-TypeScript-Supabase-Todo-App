import React, { useEffect, useState } from 'react'
import { addTodo, getAllTodos } from "../../utils/supabaseFunctions"
import TodoList from './TodoList'


const TodoApp = () => {
    const [todos, setTodos] = useState<any>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const getTodos = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
        };
        getTodos();
    },[])

    const handleSubmit = async(e: any) => {
        e.preventDefault();

        if (title === "") return;
        await addTodo(title);
        let todos = await getAllTodos();
        setTodos(todos);
        setTitle("");
    };
  return (
    <div className='text-center text-white text-xl'>
        <h1 className='mb-5 text-4xl'>Todo App</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex w-full">
            <input
                id="name"
                type="text"
                className="text-black px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter task"
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
            />
            <button
                type="submit"
                className="px-6 py-4 ml-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Add
            </button>
        </form>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default TodoApp