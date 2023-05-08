import React from 'react'
import './Cart.scss'
import { Image } from '../../assets/img/images'

const Cart = () => {
  return (
    <div>
      <div className="cart-container" onClick={() => console.log("clicked")}>
        <img className='cart-icon' src={Image.cart} alt='cart-icon'/>
      </div>
    </div>
  )
}

export default Cart
