import React from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Login from './pages/Login/Login';
import Loader from './components/Loader/Loader';

const isLoggedin = false;


function App() {
  return (
    <div>
      {/* {isLoggedin && true ? <h1>Welcome, totmato</h1> : <Login /> } */}
      <Login />
      {/* <Loader /> */}
    </div>
  );
}

export default App;
