import React from 'react';

export const StatusBar = ({ systemInfo }) => {
    return (
        <div className="status-bar">
            <span className="left-status">
                <span className="status-dot"></span> Ready · Python {systemInfo.system.split(' ')[1]}
            </span>
            <span className="right-status">
                <span>{systemInfo.encoding}</span>
                <span>Portfolio {systemInfo.terminal.split(' ')[2]}</span>
                <span>500+ CP Solved</span>
                <span>{systemInfo.database}</span>
            </span>
        </div>
    );
};
