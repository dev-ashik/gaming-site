import React from 'react';
import styles from './FloatingAdd.module.css';
import ad3 from "../../images/add3.jpg";

const FloatingAdd = ({setShowAdd}) => {
    return (
        <div className={styles.adRight}>
            <button onClick={()=>setShowAdd(false)} className={styles.icon}>X</button>
            <a href="#"><img src={ad3} alt="add"/></a>
        </div>
    );
};

export default FloatingAdd;