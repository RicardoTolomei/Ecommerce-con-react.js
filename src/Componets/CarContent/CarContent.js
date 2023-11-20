import { useContext } from "react";
import { dataContext } from "../Context/DataContex";

import CarElements from './CarElements'
import CarTotal from'./CarTotal'

const Cartcontent = () => {
  const { cart } = useContext(dataContext);
  return cart.length > 0 ? (
  <>
  
  <CarElements></CarElements>
  <CarTotal></CarTotal>
  </>) : (
    <h2 className='cart-message-center'>Your car is empty

    </h2>
  )
  
  
}

export default Cartcontent
