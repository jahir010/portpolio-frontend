import React from 'react';

export const TitleBar = ({ onGithubClick, onLinkedinClick, onEmailClick }) => {
  return (
    <div className="title-bar">
      <div className="dots">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      <div className="title-info">
        <i className="fas fa-terminal"></i> jahirul@portfolio ~/backend-dev
      </div>
      <div className="title-spacer"></div>
      <div className="title-links">
        <a href="https://github.com/jahir010" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jahirul-islam-5b448a245/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:jahirulislam92134@gmail.com" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};
