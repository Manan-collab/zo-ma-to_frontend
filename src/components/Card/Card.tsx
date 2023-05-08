import React, { PropsWithChildren } from 'react'
import './Card.scss'
import burger from '../../assets/img/card_img/7.png';



const Card = () => {
  return (
    <div>
      <div className="card">
        <img className='card-image' src={burger} />
        {/* <h3>Card</h3> */}
      </div>
    </div>
  )
}

export default Card
