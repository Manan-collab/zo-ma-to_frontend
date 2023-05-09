import React, { useState } from "react";
import "./CartIcon.scss";
import { Link } from "react-router-dom";
import { Image } from "../../assets/img/images";
import Cart from "../../pages/Cart/Cart";

// const test = () => {
//   return (

//   )
// }

const CartIcon = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    console.log("false");
    setShowComponent(true);
    console.log("true");
  };

  return (
    <div>
      <div>
        {/* <Link to='/cart'> */}
        <div className='cart-icon-container' onClick={handleClick}>
          <img className='cart-icon' src={Image.cart} alt='cart-icon' />
        </div>
        {showComponent && <Cart />}
      </div>
    </div>
  );
};

export default CartIcon;
