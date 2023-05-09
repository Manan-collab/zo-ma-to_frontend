import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Login from "./pages/Login/Login";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Test/Home";
import Pricing from "./pages/Test/Pricing";
import About from "./pages/Test/About";
import Search from "./components/Search/Search";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Card from "./components/Card/Card";
import { CardCarousel } from "./components/CardCarousel/CardCarousel";
import Cart from "./pages/Cart/Cart";


function App() {
  return (
    <div>
      {/* <Card /> */}
      {/* <Dashboard /> */}

      <div className='route'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div> 
    </div>
  );
}

export default App;
