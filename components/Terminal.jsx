import React, { useState, useEffect, useRef } from 'react';
import { TerminalOutput } from './TerminalOutput';

export const Terminal = ({ initialContent, onCommand }) => {
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState(initialContent);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setOutput(initialContent);
  }, [initialContent]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputRef.current.value;
      inputRef.current.value = '';
      
      setHistory([...history, cmd]);
      setHistoryIndex(history.length);
      
      onCommand(cmd);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        inputRef.current.value = history[newIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        inputRef.current.value = history[newIndex] || '';
      } else {
        setHistoryIndex(history.length);
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className="terminal-area">
      <TerminalOutput content={output} />
      <div className="terminal-input-line">
        <span className="prompt">jahirul@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          id="terminalInput"
          placeholder="type help to get started..."
          onKeyDown={handleKeyDown}
          onClick={() => inputRef.current?.focus()}
        />
      </div>
    </div>
  );
};
