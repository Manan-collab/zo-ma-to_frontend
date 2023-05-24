import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import cake from '../../assets/img/card_img/1.png'
import roll from '../../assets/img/card_img/2.png'
import pizza from '../../assets/img/card_img/3.png'
import spaghetti from '../../assets/img/card_img/4.png'
import coffee from '../../assets/img/card_img/5.png'
import noodles from '../../assets/img/card_img/6.png'
import burger from '../../assets/img/card_img/7.png'
import startbucks2 from '../../assets/img/card_img/restaurants/starbucks.png';
import startbucks from '../../assets/img/card_img/restaurants/eats.png';
import mcdonalds from '../../assets/img/card_img/restaurants/mcdonalds.png';
import dominos from '../../assets/img/card_img/restaurants/dominos.png';
import chinatown from '../../assets/img/card_img/restaurants/chinatown.png';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';


export const responsive = {
    0: { items: 1 },
    580: { items: 2 },
    720:{ items: 3 },
    1024: { items: 4 },
    1600:{ items: 6 }
};

export const foodItems = [
    <Link to='/restaurants'><Card imgSrc={cake} onClick={() => console.log("clicked")} /></Link>,
    <Card imgSrc={roll} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={pizza} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={spaghetti} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={coffee} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={noodles} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={burger} onClick={() => console.log("clicked")}/>,
];

export const restaurants = [
    <Link to='/menu'><Card imgSrc={chinatown} onClick={() => console.log("clicked")} /></Link>,
    <Card imgSrc={mcdonalds} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks2} onClick={() => console.log("clicked")} />,
    <Card imgSrc={dominos} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks2} onClick={() => console.log("clicked")} />,
    <Card imgSrc={chinatown} onClick={() => console.log("clicked")} />,
];

export const CardCarousel = () => (
    
    <AliceCarousel
        mouseTracking
        items={foodItems}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);


export const CardCarouselRestaurants = () => (
    <AliceCarousel
        mouseTracking
        items={restaurants}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);