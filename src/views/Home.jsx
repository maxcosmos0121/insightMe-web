import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    {/* 左侧 */}
                    <div className="left-panel">
                        {/* 欢迎横幅 */}
                        <div className="welcome-banner">
                            <h1>欢迎回来, 任宇恒</h1>
                            <p>坚持记录,发现更好的自己。每一天的感悟都是成长的见证。</p>
                            <div className="welcome-buttons">
                                <button className="profile-btn" onClick={() => handleNavigation('/profile')}>个人资料</button>
                                <button className="logout-btn" onClick={() => handleNavigation('/login')}>退出登录</button>
                            </div>
                        </div>

                        {/* 数据概览 */}
                        <div className="data-overview">
                            <h2>
                                <span className="icon">📊</span>
                                数据概览
                            </h2>
                            <div className="overview-grid">
                                <div className="overview-item">
                                    <div className="number">1</div>
                                    <div className="label">已写日记</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">连续签到</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">1</div>
                                    <div className="label">待做计划</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">连续签到</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">1</div>
                                    <div className="label">待做计划</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">1</div>
                                    <div className="label">已写日记</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">连续签到</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">1</div>
                                    <div className="label">待做计划</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">已完成计划</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">1</div>
                                    <div className="label">打卡项目</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0/1</div>
                                    <div className="label">今日打卡</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">总灵感数</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">计划清单总数</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">已完成计划</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">人脉网络数</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">理财记录数</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">成长记录数</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">健康记录数</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">本月活跃天数</div>
                                </div>
                                <div className="overview-item">
                                    <div className="number">0</div>
                                    <div className="label">累计登录天数</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 右侧 */}
                    <div className="right-panel">
                        {/* 心情和喝水卡片 */}
                        <div className="top-cards">
                            <div className="mood-card">
                                <h3>
                                    <span className="icon">😊</span>
                                    今日心情
                                </h3>
                                <div className="mood-content">
                                    <span>未填写</span>
                                </div>
                            </div>
                            <div className="water-card">
                                <h3>
                                    <span className="icon">💧</span>
                                    今日喝水
                                </h3>
                                <div className="water-content">
                                    <span>0 次</span>
                                </div>
                            </div>
                        </div>

                        {/* 快速操作 */}
                        <div className="quick-actions-section">
                            <h2>
                                <span className="icon">🚀</span>
                                快速操作
                            </h2>
                            <div className="quick-actions">
                                <button className="action-btn diary-btn" onClick={() => handleNavigation('/diary')}>
                                    <span className="icon">📄</span>
                                    每日日记
                                </button>
                                <button className="action-btn checkin-btn" onClick={() => handleNavigation('/checkin')}>
                                    <span className="icon">✅</span>
                                    日常打卡
                                </button>
                                <button className="action-btn inspiration-btn" onClick={() => handleNavigation('/inspiration')}>
                                    <span className="icon">💡</span>
                                    灵感一现
                                </button>
                                <button className="action-btn plan-btn" onClick={() => handleNavigation('/plan')}>
                                    <span className="icon">📋</span>
                                    计划清单
                                </button>
                                <button className="action-btn network-btn" onClick={() => handleNavigation('/network')}>
                                    <span className="icon">🌐</span>
                                    人脉网络
                                </button>
                                <button className="action-btn water-record-btn" onClick={() => handleNavigation('/water')}>
                                    <span className="icon">💧</span>
                                    喝水记录
                                </button>

                            </div>
                        </div>

                        {/* 底部分类导航 */}
                        <div className="category-nav">
            
                            <div className="category-buttons">
                                <button className="category-btn finance-btn" onClick={() => handleNavigation('/finance')}>
                                    <span className="icon">💰</span>
                                    理财
                                </button>
                                <button className="category-btn growth-btn" onClick={() => handleNavigation('/growth')}>
                                    <span className="icon">📈</span>
                                    成长
                                </button>
                                <button className="category-btn health-btn" onClick={() => handleNavigation('/health')}>
                                    <span className="icon">💪</span>
                                    健康
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
