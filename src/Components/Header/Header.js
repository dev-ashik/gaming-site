import React from 'react';
import styles from './Header.module.css';
import gameLogo from '../../images/gameLogo.png';

const headerMenuText = ["注册", "登录", "帮助", "更多"];

const Header = () => {
    return (
        <header className={styles.head}>
            <nav>
                <div className={styles.gameLogo}>
                    <h1>
                        <a href="#"></a>
                        <img src={gameLogo} alt="gameLogo" />
                    </h1>
                </div>

                <div className={styles.gameIndex}>
                    <a href="#">首页</a>
                </div>

                <div className={styles.menu}>
                    {
                        headerMenuText.map((data, uid)=> <a href="#" key={uid}>{data}</a>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;