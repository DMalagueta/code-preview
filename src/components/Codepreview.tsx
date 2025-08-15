import { useRef, useState, useMemo, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./codepreview.css";

interface CodePreviewProps {
  code: string;
  filename?: string;
  language?: string;
  showCopyButton?: boolean;
  highlightLines?: number[];
  showLineNumbers?: boolean;
}

export default function Codepreview({
  code,
  showCopyButton = true,
  filename,
  language = "javascript",
  highlightLines = [],
  showLineNumbers = true,
}: CodePreviewProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trimmedCode = useMemo(() => code.replace(/^\n/, "").replace(/\n$/, ""), [code]);

  const handleCopyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(trimmedCode);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => setCopyState("idle"), 2000);
  }, [trimmedCode]);

  const copyButtonLabel =
    copyState === "copied" ? "Copied!" : copyState === "error" ? "Failed" : "Copy";

  const highlightSet = useMemo(() => new Set(highlightLines), [highlightLines]);

  return (
    <div className="code-preview" role="region" aria-label={filename ? `Code: ${filename}` : "Code snippet"}>
      <div className="code-preview__header">
        <div className="code-preview__dots">
          <span className="code-preview__dot code-preview__dot--red" />
          <span className="code-preview__dot code-preview__dot--yellow" />
          <span className="code-preview__dot code-preview__dot--green" />
        </div>
        {filename && filename.trim() !== "" && (
          <span className="code-preview__filename">{filename}</span>
        )}
        {language && (
          <span className="code-preview__language">{language}</span>
        )}
        {showCopyButton && (
          <button
            className={`code-preview__copy-btn code-preview__copy-btn--${copyState}`}
            onClick={handleCopyCode}
            aria-label="Copy code to clipboard"
            type="button"
          >
            {copyState === "idle" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
            {copyState === "copied" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
            {copyState === "error" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
            <span>{copyButtonLabel}</span>
          </button>
        )}
      </div>
      <div className="code-preview__body">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          wrapLines
          lineProps={(lineNumber: number) => {
            const style: React.CSSProperties = {};
            if (highlightSet.has(lineNumber)) {
              style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              style.borderLeft = "3px solid #61dafb";
              style.marginLeft = "-3px";
            }
            return { style };
          }}
          customStyle={{
            margin: 0,
            padding: "16px",
            borderRadius: "0 0 10px 10px",
            fontSize: "14px",
            lineHeight: "1.6",
            background: "#1e1e2e",
          }}
          codeTagProps={{
            style: {
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
            },
          }}
        >
          {trimmedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
