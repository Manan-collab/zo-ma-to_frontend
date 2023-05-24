import React from "react";
import { rest } from "../../assets/json/restaurants";
import './MenuCard.scss';
import Button from "../Button/Button";

const MenuCard = ({rest} : any) => {
  return (
    <div>
      <div className='MenuCardContainer'>
         <div className="MenuImageContainer">
         <img
            src={rest.logo}
            alt='restaurant logo'
            height='100px'
            width='100px'
          />
         </div>
         <div className="MenuDetailsContainer">
         <h3 style={{fontSize:'25px'}}>Item Name</h3>
          <h5 style={{fontSize:'13px'}}>Item Description</h5>
          <h4 style={{fontSize:'20px'}}>Item Price</h4>
            <div className="MenuRatingContainer">
            {rest.rating}
           
            </div>
            <Button
            customButton='addcart'
            btnlabel='addcart'
            onClick={() => console.log("clicked")}>Add To Cart</Button>
         </div>
      </div>
    </div>
  );
};

export default MenuCard;
