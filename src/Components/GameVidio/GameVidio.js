import React from 'react';
import './GameVidio.css';

const GameVidio = () => {
    return (
        <div className="gameBorder">
                <div className="gameTitle">
                    <dl>
                        <dt>游戏视频</dt>
                    </dl>
                </div>
                <div className="clear"></div>
                <dl className="gameVideo">
                    <dt><a href="#"><img src="../img/img-1.jpg" alt="" /></a><a href="#">《航海之王》麻辣炫酷反穿越，英雄时尚大变身！</a></dt>
                    <dd><a href="#"><img src="../img/img-2.jpg" alt=""/></a><a href="#">《弹弹堂》吴克群同名激情主题MV，体验修真乐趣</a></dd>
                </dl>
                <div className="clear"></div>
            </div>
    );
};

export default GameVidio;