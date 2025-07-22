import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './Diary.css';

export default function Diary() {
    const navigate = useNavigate();
    const headerButtons = [
        {
            text: '写日记',
            onClick: () => navigate('/diary/write'), // 跳转到写日记页面，暂不实现
            className: 'write-btn'
        },
        {
            text: '查看历史',
            onClick: () => navigate('/diary/history'), // 跳转到历史页面，暂不实现
            className: 'history-btn'
        },
        {
            text: '返回首页',
            onClick: () => navigate('/home'),
            className: 'back-btn'
        }
        
    ];
    return (
        <div className="page-center">
            <div className="board">
                <Header title="每日日记" buttons={headerButtons} />
                {/* 七天历史记录容器 */}
                <div className="diary-history-container">
                    {[...Array(7)].map((_, idx) => (
                        <div className="diary-card" key={idx}>
                            <div className="diary-card-meta">
                                <span className="diary-meta-week">星期{['日','一','二','三','四','五','六'][(7-idx)%7]}</span>
                                <span className="diary-meta-date">2024-05-2{7-idx}</span>
                                <span className="diary-meta-location">北京</span>
                                <span className="diary-meta-weather">多云</span>
                                <span className="diary-meta-mood">心情：4/5</span>
                            </div>
    
                            <div className="diary-card-content">
                                <div className="diary-section">
                                    <div className="diary-section-title">今天做了什么：</div>
                                    <div className="diary-section-text">{`示例内容1\n示例内容2`.replace(/\\n/g, '\n')}</div>
                                </div>
                                <div className="diary-section">
                                    <div className="diary-section-title">想法和感悟：</div>
                                    <div className="diary-section-text">{`示例内容1\n示例内容2`.replace(/\\n/g, '\n')}</div>
                                </div>
                                <div className="diary-section">
                                    <div className="diary-section-title">明天计划：</div>
                                    <div className="diary-section-text">{`示例内容1\n示例内容2`.replace(/\\n/g, '\n')}</div>
                                </div>
                                <div className="diary-section">
                                    <div className="diary-section-title">其他：</div>
                                    <div className="diary-section-text">{`示例内容1\n示例内容2`.replace(/\\n/g, '\n')}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 