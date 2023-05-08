import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.scss';
import img1 from '../../assets/img/carousel_img/1.png';
import img2 from '../../assets/img/carousel_img/2.png';
import img3 from '../../assets/img/carousel_img/3.png';
import img4 from '../../assets/img/carousel_img/4.png';
import img5 from '../../assets/img/carousel_img/5.png';
import img6 from '../../assets/img/carousel_img/6.png';

import React from 'react';

const IndividualIntervalsExample = () => {
  return (      
    <Carousel className='carosel'>
      <Carousel.Item className='carosel-item' interval={3000} >
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carosel-item' interval={3000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carosel-item' interval={3000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carosel-item' interval={3000}>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  
  )
}

export default IndividualIntervalsExample