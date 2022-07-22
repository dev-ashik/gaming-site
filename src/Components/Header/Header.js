import React from 'react';
import styles from './Header.module.css';
import gameLogo from '../../images/gameLogo.png';

const headerMenuText = ["注册", "登录", "帮助", "更多"];

const Header = () => {
    return (
        <header className={styles.head}>
            <nav>
                <div className={styles.gameLogo}>
                    <div className={styles.logo}>
                        <a href="#"><img className={styles.logo_image} src={gameLogo} alt="gameLogo" /></a>
                    </div>
                    <div className={styles.links}>
                        <a href="">开心网</a>
                        <div className={styles.border}></div>
                        <a href="">游戏大才</a>
                        <a href="#" >首页</a>
                    </div>
                </div>

                <div className={styles.menu}>
                    {
                        headerMenuText.map((data, uid) => <a href="#" key={uid}>{data}</a>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;