import ReactSanitizerParser from './components/ReactSanitizerParser';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import DOMPurify, { Config as SanitizerConfig } from 'dompurify';

export { parse, DOMPurify };
export type { HTMLReactParserOptions, SanitizerConfig };
export default ReactSanitizerParser;
