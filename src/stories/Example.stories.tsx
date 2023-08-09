import React from 'react';
import { StoryFn } from '@storybook/react';
import Example from '@components/Example';

export default {
  title: 'components/Example',
  argTypes: {},
};

const Template: StoryFn = () => {
  return <Example />;
};

export const Default = {
  render: Template,
  args: {},
};
