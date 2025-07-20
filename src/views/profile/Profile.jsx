import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/Header';
import './Profile.css';

export default function Profile() {
    const navigate = useNavigate();

    const headerButtons = [
        {
            text: '返回首页',
            onClick: () => navigate('/home'),
            className: 'back-btn'
        },
        {
            text: '保存',
            onClick: () => console.log('保存'),
            className: 'save-btn'
        },
        {
            text: '编辑',
            onClick: () => console.log('编辑'),
            className: 'edit-btn',
            showInMore: true
        },
        {
            text: '删除',
            onClick: () => console.log('删除'),
            className: 'delete-btn',
            showInMore: true
        }
    ];

    return (
        <div className="page-center">
            <div className="board">
                <Header title="个人资料" buttons={headerButtons}/>
                <div className="main-section">
                    <p>个人资料页面 - 待实现具体功能</p>
                </div>
            </div>
        </div>
    );
}
