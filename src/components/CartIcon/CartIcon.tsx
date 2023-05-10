import React from 'react'
import './CartIcon.scss'
import { Link } from 'react-router-dom'
import { Image } from "../../assets/img/images";

const CartIcon = () => {
  return (
    <div>
      <div>
      {/* <Link to='/cart'> */}
        <div className='cart-icon-container' onClick={() => console.log("clicked")}>
          <img className='cart-icon' src={Image.cart} alt='cart-icon' />
        </div>
      
    </div>
    </div>
  )
}

export default CartIcon



