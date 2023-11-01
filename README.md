# CodePreview Component

URL: https://dmalagueta.github.io/code-preview/

![image](https://github.com/DMalagueta/code-preview/assets/84686081/a6b4c4e5-4ca6-46da-83cf-cd5e77fd14c8)

The `CodePreview` component is a versatile React component designed for displaying and sharing code snippets. It provides a clean and organized way to showcase code with optional line numbers, a customizable filename, and the ability to disable the "Copy Code" button.

Note: not responsive (yet)

## Installation

You can install the `CodePreview` component via npm or yarn:

```bash
npm install
```

# Usage
To use the CodePreview component in your React application, import it and include it in your code. You can provide the following props:

- code: The code snippet you want to display.
- filename (optional): The filename associated with the code snippet.
- showCopyButton (optional): A boolean that determines whether to show the "Copy Code" button.:

Here's an example of how to use the CodePreview:

```js
const sampleCode = `function greet() {
  console.log('Hello, World!');
}`;


<CodePreview
 code={sampleCode}
 filename="example.js"
 showCopyButton={false}
/>

```

# Running the Project
To run the project using Vite, use the following command:
```
npm run dev
# or
yarn dev
```
