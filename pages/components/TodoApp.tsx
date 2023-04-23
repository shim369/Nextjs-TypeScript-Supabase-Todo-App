import React from 'react'
import TodoList from './TodoList'

const TodoApp = () => {
  return (
    <div className='text-center text-white text-xl'>
        <h1 className='mb-5'>Todo App</h1>
        <form className="flex w-full">
            <input
                id="name"
                type="text"
                className="px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter task"
            />
            <button
                type="submit"
                className="px-6 py-4 ml-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Add
            </button>
        </form>
        <TodoList />
    </div>
  )
}

export default TodoApp