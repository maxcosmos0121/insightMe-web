import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Plan.css';

export default function Plan() {
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
                <Header title="计划清单" buttons={headerButtons} />
                <div className="main-section">
                    <p>计划清单页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
} 