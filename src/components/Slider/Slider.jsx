import React, {useState} from 'react';
import { SliderImg } from './SliderImg';
import { slider, slide, buttonLeft, buttonRight } from './Slider.styles';
import img_1 from '../../img/img_1.jpg';
import img_2 from '../../img/img_2.jpg';
import img_3 from '../../img/img_3.jpg';
import img_4 from '../../img/img_4.jpg';
import img_5 from '../../img/img_5.jpg';
import Icon from 'react-icons-kit';
import { ic_navigate_before } from 'react-icons-kit/md/ic_navigate_before';
import { ic_navigate_next } from 'react-icons-kit/md/ic_navigate_next';

export const Slider = () => {

    const sliderArray = [
        <SliderImg src={img_1}/>, 
        <SliderImg src={img_2}/>, 
        <SliderImg src={img_3}/>, 
        <SliderImg src={img_4}/>, 
        <SliderImg src={img_5}/>
    ];

    const [x, setX] = useState(0);

    const goLeft = () => {
        console.log(x)
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
    }

    const goRight = () => {
        console.log(x)
        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
    }
 
    return (
        <div className={slider}>
            {
                sliderArray.map((item, index) => {
                    return (
                        <div key={index} className={slide} style={{transform: `translateX(${x}%)`}}>
                            {item}    
                        </div>
                    )
                })
            }
            <button className={buttonLeft} onClick={goLeft}>
                <Icon icon={ic_navigate_before} size={64} />
            </button>
            <button className={buttonRight} onClick={goRight}>
                <Icon icon={ic_navigate_next} size={64} />
            </button>
        </div>
    )
}