import React from 'react'
import TodoAdd from './TodoAdd'

const ToDo = () => {
  return (
    <div className='card-to-do'>
        <h1>Lista de tareas</h1>
        <div className='counter-todos'>
            <h3>Numero de Tareas: 4</h3>
            <h3>Pendientes</h3>
        </div>
        <div className='add-todo'>
            <h3>Agregar Tarea</h3>
            <TodoAdd></TodoAdd>

        </div>
      
    </div>
  )
}

export default ToDo
