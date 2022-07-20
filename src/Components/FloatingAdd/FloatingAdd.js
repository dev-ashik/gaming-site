import React from 'react';
import './FloatingAdd.css';
import ad3 from "../../images/ad3.jpg";

const FloatingAdd = () => {
    return (
        <div class="adRight">
            <a class="icon" href="#">X</a>
            <a href="#"><img src={ad3} alt="add"/></a>
            hello
        </div>
    );
};

export default FloatingAdd;