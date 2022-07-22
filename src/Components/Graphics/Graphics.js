import React from 'react';
import './Graphics.css';
import ad1 from "../../images/ad1.jpg";
import ad2 from "../../images/add2.jpg";

const Graphics = () => {
    return (
        <div className="ad">
                <a href="#">
                    <img src={ad1} alt="" />
                </a>
                <a href="#">
                    <img src={ad2} alt="" />
                </a>
            </div>
    );
};

export default Graphics;