import React from 'react'
import { FaTrash } from "react-icons/fa";
import TodoUpdate from './TodoUpdate';

const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}
) => {
  return (
    <li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label
					
				></label>
			</span>
			<TodoUpdate  />
			<button
				className='btn-delete'
				
			>
				<FaTrash />
			</button>
		</li>
	);
};
export default TodoItem
