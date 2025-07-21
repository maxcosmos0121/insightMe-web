import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/Header';
import './Profile.css';

export default function Profile() {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState('basic');
    
    const menuItems = [
        { key: 'basic', label: '基本信息' },
        { key: 'finance', label: '财务信息' },
        { key: 'job', label: '工作职业' },
    ];

    const headerButtons = [
        {
            text: '返回首页',
            onClick: () => navigate('/home'),
            className: 'back-btn'
        },
    ];

    const renderForm = () => {
        switch (activeMenu) {
            case 'basic':
                return (
                    <form className="profile-form-section">
                        <div className="form-group">
                            <label>姓名</label>
                            <input type="text" name="name" placeholder="请输入姓名" />
                        </div>
                        <div className="form-group">
                            <label>性别</label>
                            <select name="gender">
                                <option value="">请选择</option>
                                <option value="male">男</option>
                                <option value="female">女</option>
                                <option value="other">其他</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>生日</label>
                            <input type="date" name="birthday" placeholder="年/月/日" />
                        </div>
                        <div className="form-group">
                            <label>居住地</label>
                            <input type="text" name="location" placeholder="请输入居住地" />
                        </div>
                        <button type="button" className="save-btn">保存</button>
                    </form>
                );
            case 'finance':
                return (
                    <form className="profile-form-section">
                        <div className="form-group">
                            <label>月收入</label>
                            <input type="number" name="income" placeholder="请输入月收入" min="0" step="0.01" />
                        </div>
                        <div className="form-group">
                            <label>月支出</label>
                            <input type="number" name="expense" placeholder="请输入月支出" min="0" step="0.01" />
                        </div>
                        <button type="button" className="save-btn">保存</button>
                    </form>
                );
            case 'job':
                return (
                    <form className="profile-form-section">
                        <div className="form-group">
                            <label>职业</label>
                            <input type="text" name="job" placeholder="请输入职业" />
                        </div>
                        <div className="form-group">
                            <label>工作地点</label>
                            <input type="text" name="workplace" placeholder="请输入工作地点" />
                        </div>
                        <button type="button" className="save-btn">保存</button>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className="page-center">
            <div className="board">
                <Header title="个人资料" buttons={headerButtons}/>
                <div className="main-section">
                    <div className="profile-layout">
                        <div className="profile-menu">
                            {menuItems.map(item => (
                                <div
                                    key={item.key}
                                    className={`menu-item${activeMenu === item.key ? ' active' : ''}`}
                                    onClick={() => setActiveMenu(item.key)}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                        <div className="profile-content">
                            {renderForm()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
