# 💻 react-sanitizer-parser

<p>
  <a href="https://www.npmjs.com/package/react-sanitizer-parser" target="_blank">
  <img src="https://img.shields.io/npm/v/react-sanitizer-parser.svg"></a>
  <a href="https://www.npmjs.com/package/react-sanitizer-parser" target="_blank">
  <img src="https://img.shields.io/npm/dt/react-sanitizer-parser.svg"></a>
</p>

<b>react-sanitizer-parser</b> is a React element sanitizer parser that utilizes the [html-react-parser](https://github.com/remarkablemark/html-react-parser) and [dompurify](https://github.com/cure53/DOMPurify) libraries.

## install
```
npm install react-sanitizer-parser
```
```
yarn add react-sanitizer-parser
```

## Usage
```tsx
import ReactSanitizerParser from './ReactSanitizerParser';

const Example = () => {
  const dirty = `
    <div>
      <span>
        React Sanitizer Parser
      </span>
    </div>
  `;

  return (
    <ReactSanitizerParser>{dirty}</ReactSanitizerParser>
  );
}
```

### htmlParserOptions & sanitizerConfig
- [html-react-parser Options](https://github.com/remarkablemark/html-react-parser#usage)
- [DOMPurify Config](https://github.com/cure53/DOMPurify#can-i-configure-dompurify)

```tsx
import ReactSanitizerParser from './ReactSanitizerParser';

const Example = () => {
  const dirty = `
    <div>
      <span>
        React Sanitizer Parser
      </span>
    </div>
  `;

  return (
    <ReactSanitizerParser 
      htmlParserOptions={{ /* ...html-react-parser options */ }} 
      sanitizerConfig={{ /* ...dompurify config*/}}
    >
      {dirty}
    </ReactSanitizerParser>
  );
}
```

### parse, DOMPurify
If you need to, you can use the `parse` method of html-react-parser and DOMPurify's `DOMPurify` directly.

```tsx
import ReactSanitizerParser, { parse, DOMPurify } from "react-sanitizer-parser";
```