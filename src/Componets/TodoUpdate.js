import React from 'react'
import { FaEdit } from "react-icons/fa";

const TodoUpdate = () => {
  return  <form>

  <input type='text' className='input-update' name='description' value="pedido" placeholder='¿Que libro Deseas'>
  </input>

  <button className='btn-edit' type='submit'><FaEdit/>

  </button>
  
</form>
}

export default TodoUpdate
