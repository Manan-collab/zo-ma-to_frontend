import React from "react";
import { Image } from "../../assets/img/images";
import "./ListCard.scss";
import { rest } from "../../assets/json/restaurants";
import burger from '../../assets/img/card_img/7.png';

const ListCard = ({rest} : any) => {
  return (
    <div>
      <div className='RestaurantCardContainer'>
        <div className='RestaurantImageContainer'>
          <img
            src={burger}
            alt='restaurant logo'
            height='100px'
            width='100px'
            style={{backgroundColor: "black", borderRadius: '5rem'}}
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
