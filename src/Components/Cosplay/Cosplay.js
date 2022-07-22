import React from 'react';
import './Cosplay.css';
import img6 from "../../images/img-6.jpg";
import img7 from "../../images/img-7.jpg";
import img8 from "../../images/img-8.jpg";
import img9 from "../../images/img-9.jpg";
import img10 from "../../images/img-10.jpg";
import img11 from "../../images/img-11.jpg";
import img12 from "../../images/img-12.jpg";
import img13 from "../../images/img-13.jpg";

const cosplayData = [
    {
        img: img6,
        number: "1765314",
        rate: "22区开启"
    },
    {
        img: img7,
        number: "1245814",
        rate: "23区开启"
    },
    {
        img: img8,
        number: "1232158",
        rate: "25区开启"
    },
    {
        img: img9,
        number: "123745",
        rate: "18区开启"
    },
    {
        img: img10,
        number: "178501",
        rate: "火爆开启"
    },
    {
        img: img11,
        number: "983014",
        rate: "2服开启"
    },
    {
        img: img12,
        number: "745214",
        rate: "4服开启"
    },
    {
        img: img12,
        number: "654814",
        rate: "火爆开启"
    },
]


const Cosplay = () => {
    return (
        <div className="gameBorder">
            <div className="gameTitle">
                <dl>
                    <dt>角色扮演</dt>
                </dl>
            </div>
            <div className="role">
                <ul>
                    {
                        cosplayData.map((data, uid) => <li key={uid}><a href="#"><img src={data.img} alt="" /></a>
                            <p>游戏人气：{data.number}<br />
                                游戏状态：<span>{data.rate}</span></p>
                            <p className="playBtn">
                                <a href="#">选服</a>
                                <a className="active" href="#">进入游戏</a>
                            </p>
                        </li>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default Cosplay;