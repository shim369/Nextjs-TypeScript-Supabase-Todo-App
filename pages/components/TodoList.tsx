import React from 'react'
import { Todo } from "../../utils/interface"
import { deleteTodo, getAllTodos } from "../../utils/supabaseFunctions"

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<any>;
}

const TodoList = (props: Props) => {
  const { todos, setTodos } = props;

  const handleDlete = async (id: number) => {
    await deleteTodo(id);
    let todos = await getAllTodos();

    setTodos(todos);
  }
  return (
    <div className='mt-8'>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className='flex p-4 mb-3 justify-between bg-white text-black rounded-md'>
                <div>{todo.title}</div>
                <span className='cursor-pointer' onClick={() => handleDlete(todo.id)}>×</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList