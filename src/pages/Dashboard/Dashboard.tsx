import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AwesomeSlider from "react-awesome-slider";
import IndividualIntervalsExample from "../../components/Carousel/Carousel";
import { CardCarousel } from "../../components/CardCarousel/CardCarousel";

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <IndividualIntervalsExample />
        <h1>Cards</h1>
        <CardCarousel />
    </div>
  );
};

export default Dashboard;




