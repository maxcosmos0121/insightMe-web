import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkin.css';

export default function Checkin() {
    const navigate = useNavigate();

    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    <div className="header-section">
                        <button className="back-btn" onClick={() => navigate('/home')}>
                            ← 返回首页
                        </button>
                        <h1>日常打卡</h1>
                    </div>
                    <p>日常打卡页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 