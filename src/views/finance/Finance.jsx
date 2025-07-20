import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Finance.css';

export default function Finance() {
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
                <Header title="理财" buttons={headerButtons} />
                <div className="main-section">
                    <p>理财页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 