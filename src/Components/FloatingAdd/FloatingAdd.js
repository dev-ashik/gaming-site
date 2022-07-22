import React from 'react';
// import './FloatingAdd.css';
import ad3 from "../../images/add3.jpg";

const FloatingAdd = () => {
    return (
        <div className="adRight">
            <a className="icon" href="#">X</a>
            <a href="#"><img src={ad3} alt="add"/></a>
        </div>
    );
};

export default FloatingAdd;