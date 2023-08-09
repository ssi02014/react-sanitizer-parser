import React from 'react';
import { StoryFn } from '@storybook/react';
import ReactSanitizerParser from '@components/ReactSanitizerParser';

export default {
  title: 'components/ReactSanitizerParser',
  argTypes: {},
};

const Template: StoryFn = () => {
  return (
    <ReactSanitizerParser>{`
      <p id="main" onclick=console.log(1)>
        <p>
          Simple

        </p>
        <span class="prettify">
          React Sanitizer
          <iframe//src=jAva&Tab;script:alert(3) />
          <span>Parser</span>
        </span>
      </p>
    `}</ReactSanitizerParser>
  );
};

export const Default = {
  render: Template,
  args: {},
};
