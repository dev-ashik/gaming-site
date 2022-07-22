import React from 'react';
import './Graphics.css';
import ad1 from "../../images/ad1.jpg";
import add2 from "../../images/add2.jpg";

const Graphics = () => {
    return (
        <div class="ad">
                <a href="#">
                    <img src={ad1} alt="" />
                </a>
                <a href="#">
                    <img src={add2} alt="" />
                </a>
            </div>
    );
};

export default Graphics;