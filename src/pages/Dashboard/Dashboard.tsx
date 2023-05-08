import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AwesomeSlider from "react-awesome-slider";
import IndividualIntervalsExample from "../../components/Carousel/Carousel";
import { CardCarousel, CardCarouselRestaurants } from "../../components/CardCarousel/CardCarousel";
import Heading from "../../components/Heading/Heading";
import Cart from "../../components/Cart/Cart";


const Dashboard = () => {
  return (
    <div>
      <div className="main">
      

        <Navbar />
        <IndividualIntervalsExample />
        <Heading customHeading="What's on your mind?"/>
        <CardCarousel />
        <Heading customHeading="Top Restaurants"/>
        <CardCarouselRestaurants />   
        <Cart />     
        </div>
    </div>
  );
};

export default Dashboard;




