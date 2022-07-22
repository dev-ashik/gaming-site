import React, { useState } from 'react';
import './GameLeft.css';
import xdtgg_frxz2_44 from "../../images/xdtgg_frxz2_44.jpg";
import sub2 from "../../images/sub-2.gif";
import sub3 from "../../images/sub-3.gif";
import sub4 from "../../images/sub-4.gif";
import sub5 from "../../images/sub-5.gif";
import sub6 from "../../images/sub-6.gif";
import sub7 from "../../images/sub-7.gif";
import sub8 from "../../images/sub-8.gif";

import img7 from "../../images/img-7.jpg";
import img9 from "../../images/img-9.jpg";
import img10 from "../../images/img-10.jpg";

const gameNavData = [
    {
        name: "征战四方",
        image: sub2,
        alt: "sub2"
    },
    {
        name: "龙将",
        image: sub3,
        alt: "sub3"
    },
    {
        name: "弹弹堂",
        image: sub4,
        alt: "sub4"
    },
    {
        name: "凡人修真2",
        image: sub5,
        alt: "sub5"
    },
    {
        name: "一骑当先",
        image: sub6,
        alt: "sub6"
    },
    {
        name: "宫廷计",
        image: sub7,
        alt: "sub7"
    },
    {
        name: "神仙道",
        image: sub8,
        alt: "sub8"
    },
]

const GameLeft = () => {
    const [active, setActive] = useState(1);
    const [picture, setPicture] = useState(xdtgg_frxz2_44);
    // console.log(active);

    const handleClick = (data) => {
        if (data === 1) {
            setPicture(xdtgg_frxz2_44)
            setActive(1)
        }
        else if (data === 2) {
            setPicture(img7)
            setActive(2)
        }
        if (data === 3) {
            setPicture(img9)
            setActive(3)
        }
        if (data === 4) {
            setPicture(img10)
            setActive(4)
        }
    }
    
    return (
        <div className="firstLine">
            <div className="gameNav">
                <ul>
                    {
                       gameNavData.map((data, uid) => <li key={uid}><a href="#"><img src={data.image} alt={data.alt} />{data.name}</a></li>) 
                    }
                    
                </ul>
            </div>

            {/* Advertising picture  */}
            <div className="gameAdver">
                <a href="#">
                    <img src={picture} alt="" />
                </a>
                <ul className="code">
                    <li onClick={()=>handleClick(1)} className={active === 1 ? "active" : ""}>
                        <button>1</button>
                    </li>
                    <li onClick={()=>handleClick(2)} className={active === 2 ? "active" : ""}>
                        <button>2</button>
                    </li>
                    <li onClick={()=>handleClick(3)} className={active === 3 ? "active" : ""}>
                        <button>3</button>
                    </li>
                    <li onClick={()=>handleClick(4)} className={active === 4 ? "active" : ""}>
                        <button>4</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default GameLeft;