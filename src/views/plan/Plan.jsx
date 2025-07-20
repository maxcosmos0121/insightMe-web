import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Plan.css';

export default function Plan() {
    const navigate = useNavigate();

    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    <div className="header-section">
                        <button className="back-btn" onClick={() => navigate('/home')}>
                            ← 返回首页
                        </button>
                        <h1>计划清单</h1>
                    </div>
                    <p>计划清单页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 