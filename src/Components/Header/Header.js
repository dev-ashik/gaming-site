import React from 'react';
import './Header.css';
import gameLogo from '../../images/gameLogo.png';

const Header = () => {
    return (
        <header className='head'>
            <nav>
                <div className="gameLogo">
                    <h1><a href="#"></a><img src={gameLogo} alt="" /></h1>
                </div>

                <div className="gameIndex"><a href="#">首页</a></div>

                <div className="menu">
                    <a href="#">注册</a>&nbsp;&nbsp;| <a href="#">登录</a>&nbsp;&nbsp;|<a href="#">帮助</a>&nbsp;&nbsp;|<a
                        href="#">更多</a>
                </div>
            </nav>
        </header>

    );
};

export default Header;