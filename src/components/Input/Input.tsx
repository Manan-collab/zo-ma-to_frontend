
import React, { PropsWithChildren, useState } from 'react';
import './Input.scss';

interface Props extends PropsWithChildren {
  placeholder: string;
  type?: string;
  customInput?: string | 'inputField';
}

const Input = ({ placeholder, customInput='inputField', type= 'text' }: Props) => {
    const [name, setName] = useState("");
  return (
    <input
        className={customInput}
          type={type} 
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
        />
  )
}

export default Input;