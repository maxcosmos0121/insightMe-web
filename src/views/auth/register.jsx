import React, {useState} from 'react';
import './auth.css';
import {useNavigate} from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('两次输入的密码不一致！');
            return;
        }
        alert(`用户名：${username}\n密码：${password}`);
        // 这里可以加注册逻辑，比如接口请求

        handleRegisterClick()
    };

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/login');  // 跳转注册页
    };

    return (
        <div className="page-center">
            <div className="card-box">
                {/* 左侧介绍 */}
                <div className="card-left new-left-intro">
                    <div className="intro-top">
                        <p className="tagline">自我成长的智能管家</p>
                        <h1 className="main-title">洞察我</h1>
                        <p className="sub-title">聚合记录、计划、财务、健康与灵感的智慧平台</p>
                    </div>

                    <div className="feature-stack">
                        <div className="feature-card-item">📔
                            从 <strong>记录情绪</strong> 到 <strong>追踪健康</strong></div>
                        <div className="feature-card-item">💼
                            从 <strong>管理财务</strong> 到 <strong>构建人脉</strong></div>
                        <div className="feature-card-item">🧠
                            从 <strong>每日计划</strong> 到 <strong>灵感爆发</strong></div>
                    </div>

                    <div className="growth-slogan">
                        用 <strong>数据</strong> 洞察你的每一步成长，开启属于你的 <strong>高效人生</strong>
                    </div>

                    <div className="intro-footer">
                        © 洞察我 2025 · 版权所有 · v1.0.0
                    </div>
                </div>

                {/* 右侧注册表单 */}
                <div className="card-right">
                    <form onSubmit={handleSubmit} className="login-form">
                        <h1 className="login-title">注 册</h1>

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

                        <label className="login-label">确认密码</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="login-input"
                            placeholder="请再次输入密码"
                            required
                        />

                        <button type="submit" className="login-button">注册</button>

                        <button type="button" className="register-button"
                                onClick={handleRegisterClick}>已有账号？去登录
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
