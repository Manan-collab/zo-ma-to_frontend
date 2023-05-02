import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import pic from "../../assets/img/Take Away-pana.png";
import logo from '../../assets/img/logo.png';
import "./Login.scss";

const Login = () => {
  console.log("hie");
  return (
    <div>
      <div className='login_box'>
        <div className='image-container'>
          <img className='img' src={pic} alt='login image' height='600px' width='600px' />
        </div>
        <div className = "vertical"></div>
        <form className={"form"}>
        <img className='logo' src={logo} alt='login image' height='200px' width='200px' />
          <Input />
          <Button btnlabel='login' onClick={() => console.log("clicked")} />
        </form>

      </div>
    </div>
  );
};

export default Login;
