import React, {useState} from 'react';
import './Auth.css'
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`用户名：${username}\n密码：${password}`);
        // 这里可以加登录逻辑
    };

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');  // 跳转注册页
    };

    return (
        <div className="page-center auth-center">
            <div className="card-box">
                {/* 左侧介绍 */}
                <div className="card-left new-left-intro">
                    <div className="intro-top">
                        <p className="tagline">自我成长的智能管家</p>
                        <h1 className="main-title">洞察我</h1>
                        <p className="sub-title">聚合记录、计划、财务、健康与灵感的智慧平台</p>
                    </div>

                    <div className="feature-stack">
                        <div className="feature-card-item fade-in">📔
                            从 <strong>记录情绪</strong> 到 <strong>追踪健康</strong></div>
                        <div className="feature-card-item fade-in delay-1">💼
                            从 <strong>管理财务</strong> 到 <strong>构建人脉</strong></div>
                        <div className="feature-card-item fade-in delay-2">🧠
                            从 <strong>每日计划</strong> 到 <strong>灵感爆发</strong></div>
                    </div>

                    <div className="growth-slogan">
                        用 <strong>数据</strong> 洞察你的每一步成长，开启属于你的 <strong>高效人生</strong>
                    </div>

                    <div className="intro-footer">
                        © 洞察我 2025 · 版权所有 · v1.0.0
                    </div>
                </div>


                {/* 右侧登录表单 */}
                <div className="card-right">
                    <form onSubmit={handleSubmit} className="login-form">
                        <h1 className="login-title">登 录</h1>

                        <label className="login-label">用户名</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                            placeholder="请输入用户名"
                            required
                        />

                        <label className="login-label">密码</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                            placeholder="请输入密码"
                            required
                        />

                        {/* 记住密码 & 忘记密码 */}
                        <div className="login-options">
                            <label>
                                <input type="checkbox"/>
                                记住密码
                            </label>
                            <a href="#" className="forgot-password">忘记密码？</a>
                        </div>

                        <button type="submit" className="login-button">登录</button>

                        <button type="button" className="register-button" onClick={handleRegisterClick}>注册</button>
                    </form>

                </div>
            </div>
        </div>
    );
}


