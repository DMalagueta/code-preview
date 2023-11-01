import "./App.css";
import Codepreview from "./components/codepreview";

function App() {
  const sampleCode = `
  function greet(name) {
    console.log('Hello, ' + name);
  }
  
  greet('World');
`;

  const usageCode = `
  const sampleCode = "
      function greet(name) {
        console.log('Hello, ' + name);
      }
      
      greet('World');
    ";
  
  <Codepreview code={sampleCode} filename="teste.js" showCopyButton="false" />
  `;

  const styleCode = `
    --font-size: 14px;
    --line-height: 1.5;
    --font-family: "Courier New", Courier, monospace;
    --main-background-color: #dadada;
    --main-text-color: #333;
    --numbers-background-color: #f2f2f2;
    --numbers-border-color: #ccc;
    --numbers-text-color: #333;
    --button-background-color: #853232;
    --button-hover-background-color: #853232c4;
    --button-hover-text-color: #fff;
    --button-text-color: #fff;
  `;

  return (
    <div className="preview-component">
      <div>
        <h1>Code-preview</h1>
        <div className="preview-component__section">
          <Codepreview code={sampleCode} />
        </div>
        <hr />
        <div className="preview-component__section">
          <h2>What is it?</h2>
          <div className="preview-component__desc">
            The CodePreview component is a versatile React component designed to
            elegantly display and share code snippets. This component offers the
            following features:
            <ul>
              <li>
                Code Display: It presents code in a clean and organized format,
                with line numbers for easy reference.
              </li>
              <li>
                Code Copy: Users can easily copy code to their clipboard with
                the "Copy Code" button.
              </li>
              <li>
                Line Numbers: Line numbers are displayed alongside the code,
                allowing users to pinpoint specific lines.
              </li>
              <li>
                Customizable Styling: The component's appearance can be
                customized to match the design of your application.
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="preview-component__section">
          <h2>Usage</h2>
          <div className="preview-component__desc">
          In this usage example:
          <ul>
            <li>
              The code prop contains the code snippet you want to display.
            </li>
            <li>
              The filename prop is set to "example.js," indicating the filename
              associated with the code snippet.
            </li>
            <li>
              The showCopyButton prop is set to false, which disables the "Copy
              Code" button, preventing users from copying the code.
            </li>
          </ul>
          </div>
         
          <Codepreview
            code={usageCode}
            filename="PageWhereYouWantToUseTheComponent.tsx"
          />
          <h4>Output</h4>
          <Codepreview
            code={sampleCode}
            filename="teste.js"
            showCopyButton={false}
          />
        </div>
        <hr />
        <div className="preview-component__section">
          <h2>Styling</h2>
          <div className="preview-component__desc">
            If you don't like the default style of the component you can customise everything as you like! You just have simply to modify this CSS variables.
          </div>
         
          <Codepreview
            code={styleCode}
            filename="codepreview.css"
            showCopyButton={false}
          />
        </div>
        <hr />
        <div className="preview-component__section">
          <h2>Have fun using it :)</h2>
        </div>
        
      </div>
    </div>
  );
}

export default App;
