import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inspiration.css';

export default function Inspiration() {
    const navigate = useNavigate();

    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    <div className="header-section">
                        <button className="back-btn" onClick={() => navigate('/home')}>
                            ← 返回首页
                        </button>
                        <h1>灵感一现</h1>
                    </div>
                    <p>灵感一现页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 