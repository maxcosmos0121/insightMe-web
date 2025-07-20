import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
    const navigate = useNavigate();

    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    <div className="header-section">
                        <button className="back-btn" onClick={() => navigate('/home')}>
                            ← 返回首页
                        </button>
                        <h1>个人资料</h1>
                    </div>
                    <p>个人资料页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 