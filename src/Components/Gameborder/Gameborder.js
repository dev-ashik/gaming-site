import React from 'react';
import './Gameborder.css';

const Gameborder = () => {
    return (
        <div className="gameBorder">
                <div className="gameTitle">
                    <dl>
                        <dt>新闻公告</dt>
                    </dl>
                </div>
                <ul className="news">
                    <li><a href="#">[征战四方] 开心首服·黄巾之乱</a></li>
                    <li><a href="#">[龙将] 火爆8服·八门金</a></li>
                    <li><a href="#">[弹弹堂] 41服开启·万人竞技</a></li>
                    <li><a href="#">[凡人修真2] 03月08日·四海帝王</a></li>
                    <li><a href="#">[一骑当先] 开心2服上线送黄金</a></li>
                    <li><a href="#">[宫廷计] 03月06日·西施秘史</a></li>
                    <li className="noBorder"><a href="#">[凡人修真2] 03月08日·四海帝王</a></li>
                </ul>
            </div>
    );
};

export default Gameborder;