import React from 'react'
import Popup from 'reactjs-popup';

const Modal = () => {
  return (
    <div>
      <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
        </Popup>
    </div>
  )
}

export default Modal;

