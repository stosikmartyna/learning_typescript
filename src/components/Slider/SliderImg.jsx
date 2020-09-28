import React from 'react';
import { sliderImg } from './Slider.styles';

export const SliderImg = ( {src} ) => {
    return (
        <img src={src} alt="slide-img" className={sliderImg}/>
    )
}