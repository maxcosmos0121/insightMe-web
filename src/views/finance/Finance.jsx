import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Finance.css';

export default function Finance() {
    const navigate = useNavigate();

    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    <div className="header-section">
                        <button className="back-btn" onClick={() => navigate('/home')}>
                            ← 返回首页
                        </button>
                        <h1>理财</h1>
                    </div>
                    <p>理财页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 