import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import registration_image from "../../assets/img/Take Away-pana.png";
import logo from "../../assets/img/logo.png";
import "./SignIn.scss";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div>
      <div className='signin-box'>
        <div className='image-container'>
          <img
            className='img'
            src={registration_image}
            alt='registration_image'
            height='600px'
            width='600px'
          />
        </div>
        <div className='vertical'></div>
        <form className={"form"}>
          <img
            className='logo'
            src={logo}
            alt='login image'
            height='200px'
            width='200px'
          />
          <Input placeholder='First Name*' />
          <Input placeholder='Last Name*' />
          <Input placeholder='Email*' />
          <Button btnlabel='signin' onClick={() => console.log("clicked")}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
