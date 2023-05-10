// import React from "react";
import "./Cart.scss";

// const Cart = () => {
//   return (
//     <section className='mainContainer'>
//       <div className="blankDIv">

//       </div>
//       <div className='cart-container'>
//         <div className='cart-header'>
//           <h1>Your Cart</h1>
//         </div>
//         <div className='cart-body'>Cart Body</div>
//         <div className='cart-total'>
//           <h4>Total</h4>
//           <h2>$49.99</h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;

import { useRef } from "react";
import { Image } from "../../assets/img/images";
import { CgCloseO } from 'react-icons/cg';


const Cart = () => {
  const dialogRef = useRef<any>(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div>
      <div className='cart-icon-container' onClick={handleOpenDialog}>
        <img className='cart-icon' src={Image.cart} alt='cart-icon' />
      </div>
      <dialog className="cart-modal" ref={dialogRef} onClose={handleCloseDialog}>
      <button onClick={handleCloseDialog}>X</button>
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
        
      </dialog>
    </div>
  );
};
export default Cart;
