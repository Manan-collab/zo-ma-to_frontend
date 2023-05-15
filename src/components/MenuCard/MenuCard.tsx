import React from "react";
import { rest } from "../../assets/json/restaurants";

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
         <h3>{rest.name}</h3>
          <h5>{rest.location}</h5>
            <div className="MenuRatingContainer">
            {rest.rating}

            </div>
         </div>
      </div>
    </div>
  );
};

export default MenuCard;
