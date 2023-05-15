import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MenuCard from '../../components/MenuCard/MenuCard'
import { rest } from '../../assets/json/restaurants'
import ListCard from '../../components/ListCard/ListCard'
import { accordionData } from '../../assets/json/accordian'
import Accordion from '../../components/Accordian/Accordian'
import { Image } from '../../assets/img/images'
import './Menu.scss';
import { FaStar } from 'react-icons/fa';
import Cart from '../Cart/Cart'


const Menu = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className='RestaurantDataContainer'>
        <div className='ImageDetail'>
          <div className='InternalImageDetail'>
        <div className='RestaurantMenuImageContainer'>
          <img src={Image.chinaTownLogo}  alt='restaurant-img' style={{height:'300px', width:'300px', borderRadius:'20rem', backgroundColor:'red'}}/>
        </div>
        <div className='RestaurantDetailsComponent'>
        <h3>China Town</h3>
          <h4>Chinese, Japanese, Korean</h4>
          <h5>Down Town, Pune</h5>
          <div className='RestaurantDetailsComponentRating'>
          <h5 >4.6 / 5 <FaStar style={{color:"#ffd500" , fontSize:'25px'}}/></h5>
          </div>
          </div>
          {/* <div className='RestaurantRatingContainer'>
            <h5>4.5</h5>
          </div> */}
          </div>
          </div>
      </div>
      {/* <div className='RestaurantContainer'>
      <div className="cards">
        { rest.map((rest) =>{
            return <ListCard  rest={rest}/>
          })}
        </div>
</div> */}
    </div>
    
    <div className="accordion">
    {accordionData.map(({ title, content }) => (
      <Accordion title={title} content={content} />
    ))}
  </div>

  <Cart />
  </>
  )
}

export default Menu
