import React from "react";
import "./Cart.scss";

const Cart = () => {
  return (
    <section className='mainContainer'>
      <div className="blankDIv">
        
      </div>
      <div className='cart-container'>
        <div className='cart-header'>
          <h1>Your Cart</h1>
        </div>
        <div className='cart-body'>Cart Body</div>
        <div className='cart-total'>
          <h4>Total</h4>
          <h2>$49.99</h2>
        </div>
      </div>
    </section>
  );
};

export default Cart;
