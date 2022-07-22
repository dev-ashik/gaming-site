import React from 'react';
import styles from './FloatingAdd.module.css';
import ad3 from "../../images/add3.jpg";

const FloatingAdd = () => {
    return (
        <div className={styles.adRight}>
            <a className={styles.icon} href="#">X</a>
            <a href="#"><img src={ad3} alt="add"/></a>
        </div>
    );
};

export default FloatingAdd;