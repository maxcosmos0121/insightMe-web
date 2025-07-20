import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Network.css';

export default function Network() {
    const navigate = useNavigate();
    const headerButtons = [
        {
            text: '返回首页',
            icon: '←',
            onClick: () => navigate('/home'),
            className: 'back-btn'
        }
    ];
    return (
        <div className="page-center">
            <div className="board">
                <Header title="人脉网络" buttons={headerButtons} />
                <div className="main-section">
                    <p>人脉网络页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 