import React, { useRef } from "react";
import "./codepreview.css";

interface CodePreviewProps {
  code: string;
  filename?: string;
  showCopyButton?: boolean;
}

export default function Codepreview({
  code,
  showCopyButton = true,
  filename,
}: CodePreviewProps) {
  const codeRef = useRef<HTMLPreElement | null>(null);

  const handleCopyCode = () => {
    if (codeRef.current) {
      const range = document.createRange();
      range.selectNode(codeRef.current);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);

        try {
          document.execCommand("copy");
          alert("Code copied to clipboard");
        } catch (err) {
          console.error("Unable to copy code: ", err);
        } finally {
          if (selection) {
            selection.removeAllRanges();
          }
        }
      }
    }
  };

  const codeLines = code.split("\n").length;
  return (
    <div className="code-preview">
      {filename && filename.trim() !== "" && (
        <div className="code-preview__filename">{filename}</div>
      )}
      <div className="code-preview__container">
        <div className="code-preview__numbers">
          {Array.from({ length: codeLines }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre ref={codeRef} className={showCopyButton ? "" : "code-preview__copy-disabled"}>
          <code>{code}</code>
        </pre>
        {showCopyButton && ( // Conditionally render the button
        <div className="code-preview__copy">
          <button onClick={handleCopyCode}>Copy Code</button>
        </div>
      )}
      </div>
    </div>
  );
}
