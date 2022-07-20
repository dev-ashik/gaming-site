import React from 'react';
import './AllGames.css';
import img4 from "../../images/img-4.jpg";
import img5 from "../../images/img-5.jpg";


const AllGames = () => {
    return (
        <div className="gameBorder">
            {/* title */}
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
            {/* games */}
            <div className="allGame">
                <ul>
                    <li>
                        <div className="img"><a href="#"><img src={img4} alt="" /></a></div>
                        <div className="list">
                            <p>三国题材横版RPG网游，丰富的武将系统</p>
                            <p>类型：角色扮演</p>
                            <p>游戏人气：<span>470921</span></p>
                            <p className="playBtn">
                                <a href="#">选服</a>
                                <a className="active" href="#">进入游戏</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="img"><a href="#"><img src={img5} alt=""/></a></div>
                        <div className="list">
                            <p>一款不建主城不等CD，不占资源，全程战斗</p>
                            <p>类型：战征策略</p>
                            <p>游戏人气：8745221</p>
                            <p className="playBtn">
                                <a href="#">选服</a>
                                <a className="active" href="#">进入游戏</a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AllGames;