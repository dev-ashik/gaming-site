import React from 'react';
import './AllGames.css';
import img4 from "../../images/img-4.jpg";
import img5 from "../../images/img-5.jpg";

const allGameData = [
    {
        name: "三国题材横版RPG网游，丰富的武将系统",
        img: img4,
        about: "角色扮演",
        number: "470921"
    },
    {
        name: "一款不建主城不等CD，不占资源，全程战斗",
        img: img5,
        about: "战征策略",
        number: "8745221"
    },
]

const AllGames = () => {
    return (
        <div className="gameBorder">
            <div className="gameTitle">
                <dl>
                    <dt>全部游戏</dt>
                    <dd><a href="#">战争策略</a></dd>
                    <dd>|</dd>
                    <dd><a href="#">体育经营</a></dd>
                    <dd>|</dd>
                    <dd><a href="#">社交游戏</a></dd>
                </dl>
            </div>

            <div className="allGame">
                <ul>
                    {
                        allGameData.map((data, uid) => <li key={uid}>
                            <div className="img">
                                <a href="#">
                                    <img src={data.img} alt="" />
                                </a>
                            </div>
                            <div className="list">
                                <p>{data.name}</p>
                                <p>类型：{data.about}</p>
                                <p>游戏人气：<span>{data.number}</span></p>
                                <p className="playBtn">
                                    <a href="#">选服</a>
                                    <a className="active" href="#">进入游戏</a>
                                </p>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AllGames;