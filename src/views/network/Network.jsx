import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Network.css';

export default function Network() {
    const navigate = useNavigate();

    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    <div className="header-section">
                        <button className="back-btn" onClick={() => navigate('/home')}>
                            ← 返回首页
                        </button>
                        <h1>人脉网络</h1>
                    </div>
                    <p>人脉网络页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 