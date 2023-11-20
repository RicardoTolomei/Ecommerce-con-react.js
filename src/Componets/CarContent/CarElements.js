import { useContext } from "react";
import { dataContext } from "../Context/DataContex";
import "./CarContent.css";
import CartCounter from "./CartCounter";

import React from 'react'

const CarElements = () => {
    const {cart} = useContext(dataContext)
  return cart.map((product) =>{
    return(
        <div className="cartContent" key={product.id}>
            <img src= {product.img} alt="product-cart"/>
            <h3 className="name">{product.name}</h3>
            <CartCounter quanty={product.quanty}></CartCounter>
            <h4 className="price">{product.price}$</h4>

        </div>
    )

  })

  
}

export default CarElements
