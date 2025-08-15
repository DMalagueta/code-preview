import "./App.css";
import Codepreview from "./components/Codepreview";

function App() {
  const basicExample = `function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");`;

  const reactExample = `import Codepreview from "./components/Codepreview";

function App() {
  const code = \`const x = 42;\`;

  return (
    <Codepreview
      code={code}
      filename="example.ts"
      language="typescript"
      showCopyButton={true}
      highlightLines={[3, 4]}
    />
  );
}`;

  const propsExample = `interface CodePreviewProps {
  code: string;              // The code to display
  filename?: string;         // Filename shown in header
  language?: string;         // Language for syntax highlighting
  showCopyButton?: boolean;  // Toggle copy button (default: true)
  highlightLines?: number[]; // Lines to highlight
  showLineNumbers?: boolean; // Toggle line numbers (default: true)
}`;

  const pythonExample = `import requests
from dataclasses import dataclass

@dataclass
class User:
    name: str
    email: str
    active: bool = True

    def greet(self) -> str:
        return f"Hello, {self.name}!"

def fetch_users(url: str) -> list[User]:
    response = requests.get(url)
    response.raise_for_status()
    return [User(**data) for data in response.json()]`;

  const cssExample = `/* Catppuccin-inspired theme */
.code-preview {
  --header-bg: #181825;
  --body-bg: #1e1e2e;
  --text: #cdd6f4;
  --accent: #89b4fa;
  --success: #a6e3a1;
  --error: #f38ba8;
}`;

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <div className="hero__badge">React Component</div>
          <h1 className="hero__title">
            {"<"}CodePreview {"/>"}
          </h1>
          <p className="hero__subtitle">
            A modern React component for displaying code snippets with syntax
            highlighting, line numbers, and one-click copy.
          </p>
          <div className="hero__actions">
            <a href="https://github.com/DMalagueta/code-preview" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="#features" className="btn btn--secondary">
              Explore
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section" id="features">
          <h2 className="section__title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card__icon">&#x2728;</div>
              <h3>Syntax Highlighting</h3>
              <p>Support for 200+ languages with beautiful Catppuccin-inspired theme.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#x1F4CB;</div>
              <h3>One-Click Copy</h3>
              <p>Modern Clipboard API with visual feedback — no more alert() popups.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#x1F4F1;</div>
              <h3>Responsive</h3>
              <p>Looks great on every screen size, from mobile to ultrawide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon">&#x267F;</div>
              <h3>Accessible</h3>
              <p>ARIA labels, keyboard navigation, and focus indicators built in.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Quick Start</h2>
          <Codepreview code={reactExample} filename="App.tsx" language="tsx" highlightLines={[8, 9, 10, 11, 12]} />
        </section>

        <section className="section">
          <h2 className="section__title">Props API</h2>
          <Codepreview code={propsExample} filename="CodePreviewProps.ts" language="typescript" showCopyButton={false} />
        </section>

        <section className="section">
          <h2 className="section__title">Examples</h2>

          <div className="example">
            <h3 className="example__label">JavaScript</h3>
            <Codepreview code={basicExample} filename="greet.ts" language="typescript" />
          </div>

          <div className="example">
            <h3 className="example__label">Python</h3>
            <Codepreview code={pythonExample} filename="users.py" language="python" highlightLines={[4, 5, 6, 7]} />
          </div>

          <div className="example">
            <h3 className="example__label">CSS</h3>
            <Codepreview code={cssExample} filename="theme.css" language="css" showLineNumbers={false} />
          </div>

          <div className="example">
            <h3 className="example__label">No Copy Button</h3>
            <Codepreview code={basicExample} language="typescript" showCopyButton={false} />
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Theming</h2>
          <p className="section__desc">
            The component uses a dark theme out of the box. You can customize
            colors by overriding the CSS custom properties or passing inline
            styles through the component props.
          </p>
          <Codepreview code={cssExample} filename="codepreview.css" language="css" />
        </section>
      </main>

      <footer className="footer">
        <p>
          Built by{" "}
          <a href="https://github.com/DMalagueta" target="_blank" rel="noopener noreferrer">
            Diogo Malagueta
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
