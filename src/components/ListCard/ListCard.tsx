import React from "react";
import { Image } from "../../assets/img/images";
import "./ListCard.scss";
import { rest } from "../../assets/json/restaurants";

const ListCard = ({rest} : any) => {
  return (
    <div>
      <div className='RestaurantCardContainer'>
        <div className='RestaurantImageContainer'>
          <img
            src={rest.logo}
            alt='restaurant logo'
            height='100px'
            width='100px'
          />    
        </div>
        <div className='RestaurantDetailsContainer'>
          <h3>{rest.name}</h3>
          <h5>{rest.location}</h5>
          <div className='RestaurantRatingContainer'>
            {rest.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
