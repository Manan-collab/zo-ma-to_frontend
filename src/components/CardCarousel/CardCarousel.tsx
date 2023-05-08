import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import burger from '../../assets/img/card_img/1.png'
import Card from '../Card/Card';



export const responsive = {
    0: { items: 4 },
    568: { items: 5 },
    1024: { items: 6 },
};

export const items = [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
];

export const CardCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);