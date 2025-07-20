import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Inspiration.css';

export default function Inspiration() {
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
                <Header title="灵感一现" buttons={headerButtons} />
                <div className="main-section">
                    <p>灵感一现页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 