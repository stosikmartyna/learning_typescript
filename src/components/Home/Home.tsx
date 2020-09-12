import React from 'react';
import { homeContainer, text } from './Home.styles';

export const Home = () => {
    return (
        <div className={homeContainer}>
            <div className={text}>
                <h1>Modern architecture</h1>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis tempore qui, totam possimus aliquid est deleniti aspernatur animi. Perspiciatis, voluptate vel ipsam dolor beatae expedita quaerat quasi labore id tempora.</span>
            </div>
        </div>
    )
}