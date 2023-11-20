import React from 'react'

const CartCounter = ({quanty}) => {
  return (
    <div>
        <p className='counter-button'>+</p>
        <p>{quanty}</p>
        <p>-</p>
      
    </div>
  )
}

export default CartCounter
