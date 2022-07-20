import React from 'react';
import './GameLeft.css';
import xdtgg_frxz2_44 from "../../images/xdtgg_frxz2_44.jpg";


const GameLeft = () => {
    return (
        <div className="container">
            <section className="gameLeft">
                <div className="firstLine">
                    <div className="gameNav">
                        <ul>
                            <li><a href="#"><img src="../img/sub-2.gif" alt="" />征战四方</a></li>
                            <li><a href="#"><img src="../img/sub-3.gif" alt="" />龙将</a></li>
                            <li><a href="#" ><img src="../img/sub-4.gif" alt="" />弹弹堂</a></li>
                            <li><a href="#"><img src="../img/sub-5.gif" alt="" />凡人修真2</a></li>
                            <li><a href="#"><img src="../img/sub-6.gif" alt="" />一骑当先</a></li>
                            <li><a href="#"><img src="../img/sub-7.gif" alt="" />宫廷计</a></li>
                            <li><a href="#"><img src="../img/sub-8.gif" alt="" />神仙道</a></li>
                        </ul>
                    </div>

                    {/* Advertising picture  */}
                    <div className="gameAdver">
                        <a href="#">
                            <img src={xdtgg_frxz2_44} alt="" />
                        </a>
                        <ul className="code">
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GameLeft;