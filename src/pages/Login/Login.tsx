import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import registration_image from "../../assets/img/logo/Take Away-pana.png";
import logo from "../../assets/img/logo/logo.png";
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import SignIn from "../SignIn/SignIn";
import { Link } from "react-router-dom";

const Login = () => {
  let test = <SignIn />
  return (
    <div className="main_box">
      <div className='login_box'>
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
          <Input placeholder='Email*' />
          <Input placeholder='Password*' type='password' />
          <Button btnlabel='login' onClick={() => console.log("clicked")}>
            Login
          </Button>
          {/* <a href='/'>
            don't have an account yet?
          </a> */}
          <Link to='/signin'>don't have an account yet?</Link>
          
          <h5>━━━━━ or continue with ━━━━━</h5>
          <Button
            customButton='google'
            btnlabel='google'
            onClick={() => console.log("clicked")}
          >
            <FcGoogle /> Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
