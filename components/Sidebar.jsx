import React from 'react';

export const Sidebar = ({ items, activeSection, onItemClick, socialLinks }) => {
    return (
        <aside className="sidebar">
            <span className="sidebar-label">📁 Explorer</span>
            {items.map((item) => (
                <button
                    key={item.name}
                    className={`sidebar-item ${activeSection === item.name.replace('.py', '') ? 'active' : ''}`}
                    onClick={() => onItemClick(item.name.replace('.py', ''))}
                    data-cmd={`cat ${item.name.replace('.py', '')}`}
                >
                    <i className={`fas ${item.icon}`}></i>
                    {item.name}
                </button>
            ))}
            <div className="sidebar-spacer"></div>
            <div className="sidebar-social">
                {socialLinks.map((link) => (
                    <a key={link.icon} href={link.url} target="_blank" rel="noopener noreferrer">
                        <i className={`fab fa-${link.icon}`}></i>
                    </a>
                ))}
            </div>
        </aside>
    );
};
