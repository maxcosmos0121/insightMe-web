import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Growth.css';

export default function Growth() {
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
                <Header title="成长" buttons={headerButtons} />
                <div className="main-section">
                    <p>成长页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 