import React, {useState, useEffect} from 'react';
import './Header.css';

export default function Header({title, buttons = []}) {
    const [showMore, setShowMore] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // 检测屏幕尺寸
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 480);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // 根据屏幕尺寸决定按钮分组
    const mainButtons = isSmallScreen ? [] : buttons.filter(btn => !btn.showInMore);
    const moreButtons = isSmallScreen ? buttons : buttons.filter(btn => btn.showInMore);

    // 检查是否需要显示更多按钮
    const hasMoreButtons = moreButtons.length > 0;

    return (
        <div className="header">
            <div className="header-left">
                <h1>{title}</h1>
            </div>
            <div className="header-right">
                {/* 主要按钮 */}
                <div className="main-buttons">
                    {mainButtons.map((button, index) => (
                        <button
                            key={index}
                            className={`header-btn ${button.className || ''}`}
                            onClick={button.onClick}
                            disabled={button.disabled}
                        >
                            {button.icon && <span className="btn-icon">{button.icon}</span>}
                            <span className="btn-text">{button.text}</span>
                        </button>
                    ))}
                </div>

                {/* 更多按钮 */}
                {hasMoreButtons && (
                    <div className="more-buttons">
                        <button
                            className="header-btn more-btn"
                            onClick={() => setShowMore(!showMore)}
                        >
                            <span className="btn-icon">⋯</span>
                            <span className="btn-text">更多</span>
                        </button>

                        {showMore && (
                            <div className="more-dropdown">
                                {moreButtons.map((button, index) => (
                                    <button
                                        key={index}
                                        className={`dropdown-btn ${button.className || ''}`}
                                        onClick={() => {
                                            button.onClick();
                                            setShowMore(false);
                                        }}
                                        disabled={button.disabled}
                                    >
                                        {button.icon && <span className="btn-icon">{button.icon}</span>}
                                        <span className="btn-text">{button.text}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
