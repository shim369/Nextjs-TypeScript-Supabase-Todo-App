import React from 'react'

const TodoList = () => {
  return (
    <div className='mt-8'>
        <ul>
            <li className='flex p-4 justify-between bg-white text-black rounded-md'>
                <div>Test</div>
                <span className='cursor-pointer'>×</span>
            </li>
        </ul>
    </div>
  )
}

export default TodoList