import React from 'react';
import './RightContent.css';

const RightContent = () => {
    return (
        <aside class="gameRight">
        <div class="gameLogin clear">
            <h1>开心网用户登录</h1>
            <form action="#">
                <ul>
                    <li>账号：
                        <input name="username" type="text" placeholder="字母、数字的六位字符" required/>
                    </li>
                    <li>密码：
                        <input name="pwd" type="password" placeholder="四位数字" required/>
                    </li>
                    <li>
                        <input class="login" name="login" type="submit" value=" "/>
                    </li>
                    <li>
                        <a href="#">立即注册</a>
                        <a href="#">忘记密码</a>
                    </li>
                </ul>
            </form>
        </div>
    </aside>
    );
};

export default RightContent;