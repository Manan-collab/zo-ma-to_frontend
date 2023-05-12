import React, { PropsWithChildren } from 'react'
import './Card.scss'
import burger from '../../assets/img/card_img/7.png';

interface Props extends PropsWithChildren {
  imgSrc: string;
  onClick: () => void;
}

const Card = ({ imgSrc, onClick }: Props) => {
  return (
    <div>
      <div className='mainCardContainer'>
        <img className='card-image' src={imgSrc} onClick={onClick}/>
    </div>
    </div>
  )
}

export default Card
