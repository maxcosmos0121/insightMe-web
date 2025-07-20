import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Health.css';

export default function Health() {
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
                <Header title="健康" buttons={headerButtons} />
                <div className="main-section">
                    <p>健康页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 