import React from 'react';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import DOMPurify, { Config as sanitizerConfig } from 'dompurify';

interface Props {
  children: string | Node;
  sanitizerConfig?: sanitizerConfig;
  htmlParserOptions?: HTMLReactParserOptions;
}

const ReactSanitizerParser = ({
  children,
  htmlParserOptions = {},
  sanitizerConfig = {},
}: Props) => {
  return (
    <>
      {parse(
        DOMPurify.sanitize(children, {
          ...sanitizerConfig,
          RETURN_DOM_FRAGMENT: false,
          RETURN_DOM: false,
        }),
        { ...htmlParserOptions }
      )}
    </>
  );
};

export default ReactSanitizerParser;
