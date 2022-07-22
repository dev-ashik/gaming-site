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
                    <li><a href="#"><img src={img6} alt="" /></a>
                        <p>游戏人气：1765314<br/>
                            游戏状态：<span>22区开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                    <li><a href="#"><img src={img7} alt=""/></a>
                        <p>游戏人气：1245814<br/>
                            游戏状态：<span>23区开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                    <li><a href="#"><img src={img8} alt=""/></a>
                        <p>游戏人气：1232158<br/>
                            游戏状态：<span>25区开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                    <li><a href="#"><img src={img9} alt=""/></a>
                        <p>游戏人气：123745<br/>
                            游戏状态：<span>18区开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                    <li><a href="#"><img src={img10} alt=""/></a>
                        <p>游戏人气：178501<br/>
                            游戏状态：<span>火爆开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                    <li><a href="#"><img src={img11} alt=""/></a>
                        <p>游戏人气：983014<br/>
                            游戏状态：<span>2服开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                    <li><a href="#"><img src={img12} alt=""/></a>
                        <p>游戏人气：745214<br/>
                            游戏状态：<span>4服开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                    <li><a href="#"><img src={img13} alt=""/></a>
                        <p>游戏人气：654814<br/>
                            游戏状态：<span>火爆开启</span></p>
                        <p className="playBtn">
                            <a href="#">选服</a>
                            <a className="active" href="#">进入游戏</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Cosplay;