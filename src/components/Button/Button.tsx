import React, { PropsWithChildren, ReactNode } from "react";
import "./Button.scss";

interface Props extends PropsWithChildren {
  btnlabel : string;
  onClick : () => void;
  customButton?: string | 'button';
}

const Button = ({ btnlabel, onClick, customButton='button',children}: Props) => {
  
  return <button className={customButton} onClick={onClick}>{children}</button>;
};
export default Button;

