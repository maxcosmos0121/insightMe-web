import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="page-center">
            <div className="board">
                <div className="main-section">
                    {/* 左侧 */}
                    <div className="left-panel">
                        <div className="card-main welcome-card">
                            <h2>欢迎回来，任宇恒！</h2>
                            <p>今天又是充满希望的一天！</p>
                        </div>
                        <div className="card overview-card">
                            <h2>概览</h2>
                            <p>显示你的近期动态、任务完成情况等。</p>
                        </div>
                    </div>

                    {/* 右侧 */}
                    <div className="right-panel">
                        <div className="card mood-card">
                            <h2>今日心情</h2>
                            <p>记录你的心情，观察变化。</p>
                        </div>
                        <div className="card quick-actions-card">
                            <h2>快捷操作</h2>
                            <div className="quick-actions">
                                <button>每日日记</button>
                                <button>日常打卡</button>
                                <button>计划安排</button>
                                <button>灵感一现</button>
                                <button>人脉网络</button>
                            </div>
                        </div>

                        {/* 底部三个小卡片 */}
                        <div className="mini-card-row">
                            <div className="card mini-card">理财</div>
                            <div className="card mini-card">成长</div>
                            <div className="card mini-card">健康</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
