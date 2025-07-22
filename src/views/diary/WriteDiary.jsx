import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/Header';
import './Diary.css';

export default function WriteDiary() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        date: '',
        location: '',
        weather: '',
        mood: 3,
        today: '',
        thought: '',
        plan: '',
        other: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const handleSave = () => {
        // 这里可以添加保存逻辑
        alert('保存成功！（仅示例）');
    };

    const headerButtons = [
        {
            text: '返回',
            onClick: () => navigate('/diary'),
            className: 'back-btn'
        }
    ];

    return (
        <div className="page-center">
            <div className="board">
                <Header title="写日记" buttons={headerButtons}/>
                <div className="write-diary-form">
                    <div className="write-diary-row">
                        <div>
                            <label>当前日期：</label>
                            <input type="date" name="date" value={form.date} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>所在位置：</label>
                            <input type="text" name="location" value={form.location} onChange={handleChange}
                                   placeholder="请输入位置"/>
                        </div>
                        <div>
                            <label>今日天气：</label>
                            <input type="text" name="weather" value={form.weather} onChange={handleChange}
                                   placeholder="如：晴/多云"/>
                        </div>

                        <div>
                            <label>心情评分：</label>
                            <input type="number" name="mood" min="1" max="5" value={form.mood} onChange={handleChange}
                                   style={{width: 60}}/>
                        </div>
                    </div>
                    <div className="write-diary-section">
                        <label>今天做了什么：</label>
                        <textarea name="today" value={form.today} onChange={handleChange} rows={3}
                                  placeholder="请输入内容"/>
                    </div>
                    <div className="write-diary-section">
                        <label>想法和感悟：</label>
                        <textarea name="thought" value={form.thought} onChange={handleChange} rows={3}
                                  placeholder="请输入内容"/>
                    </div>
                    <div className="write-diary-section">
                        <label>明天计划：</label>
                        <textarea name="plan" value={form.plan} onChange={handleChange} rows={3}
                                  placeholder="请输入内容"/>
                    </div>
                    <div className="write-diary-section">
                        <label>其他：</label>
                        <textarea name="other" value={form.other} onChange={handleChange} rows={2}
                                  placeholder="请输入内容"/>
                    </div>
                    <button className="write-diary-save-btn" onClick={handleSave}>保存</button>
                </div>
            </div>
        </div>
    );
}
