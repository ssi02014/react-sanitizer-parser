import ReactSanitizerParser from './components/ReactSanitizerParser';

import { parse, DOMPurify } from './components/ReactSanitizerParser';
import type {
  HTMLReactParserOptions,
  SanitizerConfig,
} from './components/ReactSanitizerParser';

export { parse, DOMPurify, HTMLReactParserOptions, SanitizerConfig };
export default ReactSanitizerParser;
