import React, { useRef, useEffect } from 'react';

export const TerminalOutput = ({ content }) => {
    const outputRef = useRef(null);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = 0;
        }
    }, [content]);

    return (
        <div className="terminal-output" id="terminalOutput" ref={outputRef}>
            {content && content.map((line, idx) => (
                <div key={idx} className={`out-line ${line.className}`}>
                    <div dangerouslySetInnerHTML={{ __html: line.text }} />
                </div>
            ))}
        </div>
    );
};
