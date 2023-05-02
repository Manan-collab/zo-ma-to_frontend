import React, { PropsWithChildren, useState } from 'react';
import './Input.scss';

interface Props extends PropsWithChildren {}

const Input = ({ children }: Props) => {
    const [name, setName] = useState("");
  return (
    <input
        className='inputField'
          type="text" 
            placeholder='email address'
        
          onChange={(e) => setName(e.target.value)}
        />
  )
}

export default Input;



// const Button = () => {
//   function Clicked() {
//     alert("You clicked Login!");
//   }

//   return <button className='buttonOne' onClick={Clicked}>{children}</button>;
// };
