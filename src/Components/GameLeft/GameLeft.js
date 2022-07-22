import React from 'react';
import './GameLeft.css';
import xdtgg_frxz2_44 from "../../images/xdtgg_frxz2_44.jpg";
import sub2 from "../../images/sub-2.gif";
import sub3 from "../../images/sub-3.gif";
import sub4 from "../../images/sub-4.gif";
import sub5 from "../../images/sub-5.gif";
import sub6 from "../../images/sub-6.gif";
import sub7 from "../../images/sub-7.gif";
import sub8 from "../../images/sub-8.gif";

const GameLeft = () => {
    return (
        <div className="container">
            <section className="gameLeft">
                <div className="firstLine">
                    <div className="gameNav">
                        <ul>
                            <li><a href="#"><img src={sub2} alt="" />征战四方</a></li>
                            <li><a href="#"><img src={sub3} alt="" />龙将</a></li>
                            <li><a href="#" ><img src={sub4} alt="" />弹弹堂</a></li>
                            <li><a href="#"><img src={sub5} alt="" />凡人修真2</a></li>
                            <li><a href="#"><img src={sub6} alt="" />一骑当先</a></li>
                            <li><a href="#"><img src={sub7} alt="" />宫廷计</a></li>
                            <li><a href="#"><img src={sub8} alt="" />神仙道</a></li>
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