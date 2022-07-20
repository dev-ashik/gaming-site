import React from 'react';
import './AllGames.css';
import img4 from "../../images/img-4.jpg";
import img5 from "../../images/img-5.jpg";


const AllGames = () => {
    return (
        <div class="gameBorder">
            {/* title */}
            <div class="gameTitle">
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
            <div class="allGame">
                <ul>
                    <li>
                        <div class="img"><a href="#"><img src={img4} alt="" /></a></div>
                        <div class="list">
                            <p>三国题材横版RPG网游，丰富的武将系统</p>
                            <p>类型：角色扮演</p>
                            <p>游戏人气：<span>470921</span></p>
                            <p class="playBtn">
                                <a href="#">选服</a>
                                <a class="active" href="#">进入游戏</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="img"><a href="#"><img src={img5} alt=""/></a></div>
                        <div class="list">
                            <p>一款不建主城不等CD，不占资源，全程战斗</p>
                            <p>类型：战征策略</p>
                            <p>游戏人气：8745221</p>
                            <p class="playBtn">
                                <a href="#">选服</a>
                                <a class="active" href="#">进入游戏</a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AllGames;