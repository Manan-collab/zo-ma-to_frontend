import React, { PropsWithChildren, ReactNode } from "react";
import "./Button.scss";

interface Props extends PropsWithChildren {
  btnlabel : string;
  onClick : () => void;
}

const Button = ({ btnlabel, onClick }: Props) => {

  return <button className='buttonOne' onClick={onClick}>{btnlabel}</button>;
};
export default Button;
