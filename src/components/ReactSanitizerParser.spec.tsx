import React from 'react';
import { render } from '@testing-library/react';
import ReactSanitizerParser from './ReactSanitizerParser';

describe('ReactSanitizerParser', () => {
  it('should convert children string to React Element', () => {
    const dirty = `
      <div>
        <span>
          React Sanitizer Parser
        </span>
      </div>
    `;

    const { container } = render(
      <ReactSanitizerParser>{dirty}</ReactSanitizerParser>
    );

    const div = container.querySelector('div');
    const span = container.querySelector('span');

    expect(div).toBeInTheDocument();
    expect(span).toBeInTheDocument();

    expect(span).toHaveTextContent('React Sanitizer Parser');
  });

  it('should remove vulnerable tags for XSS attack', () => {
    const dirty = `
      <p>
        HELLO
        <iframe src=JavScript:alert&lpar;1)></ifrAMe>
        <br>
        goodbye
      </p>
    `;

    const { container } = render(
      <ReactSanitizerParser>{dirty}</ReactSanitizerParser>
    );

    const iframe = container.querySelector('iframe');
    const paragraph = container.querySelector('p');

    expect(iframe).not.toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it('should remove vulnerable attributes for XSS attack', () => {
    const dirty = `<img src=x onerror=alert(1) />`;

    const { container } = render(
      <ReactSanitizerParser>{dirty}</ReactSanitizerParser>
    );

    const img = container.querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
    expect(img).not.toHaveAttribute('onerror');
  });
});
