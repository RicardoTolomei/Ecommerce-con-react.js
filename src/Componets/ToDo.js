import React from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList';
import { useTodo } from '../hooks/useTodo';



const ToDo = () => {

    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo

    } = useTodo();
  return (
    <div className='card-to-do'>
        <h1>Lista de tareas</h1>
        <div className='counter-todos'>
            <h3>Numero de Tareas: {todosCount}</h3>
            <h3>Pendientes: {pendingTodosCount}</h3>
        </div>
        <div className='add-todo'>
            <h3>Agregar Tarea</h3>
            <TodoAdd handleNewTodo={handleNewTodo}></TodoAdd>

        </div>
        <TodoList todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
         
        
       />


        
      
    </div>
  )
}

export default ToDo
