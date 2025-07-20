import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Checkin.css';

export default function Checkin() {
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
                <Header title="日常打卡" buttons={headerButtons} />
                <div className="main-section">
                    <p>日常打卡页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 