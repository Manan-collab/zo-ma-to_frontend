import React from 'react'
import { rest } from '../../assets/json/restaurants'
import ListCard from '../../components/ListCard/ListCard'
import './Restaurants.scss'
import Navbar from '../../components/Navbar/Navbar'

const Restaurants = () => {
  return (
    <>
    <Navbar />
    <div className='RestaurantContainer'>
       <div className="cards">
        { rest.map((rest) =>{
            return <ListCard  rest={rest}/>
          })}
        </div>
    </div>
    </>
  )
}

export default Restaurants;
