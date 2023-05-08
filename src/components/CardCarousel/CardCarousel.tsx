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
import Card from '../Card/Card';



export const responsive = {
    0: { items: 4 },
    568: { items: 5 },
    1024: { items: 6 },
};

export const foodItems = [
    <Card imgSrc={cake} onClick={() => console.log("clicked")} />,
    <Card imgSrc={roll} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={pizza} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={spaghetti} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={coffee} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={noodles} onClick={() => console.log("clicked")}/>,
    <Card imgSrc={burger} onClick={() => console.log("clicked")}/>,
];

export const restaurants = [
    <Card imgSrc={startbucks} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks2} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks2} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks2} onClick={() => console.log("clicked")} />,
    <Card imgSrc={startbucks} onClick={() => console.log("clicked")} />,
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