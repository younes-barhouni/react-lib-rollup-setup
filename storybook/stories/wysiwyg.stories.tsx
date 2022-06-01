import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FroalaEditor } from '../../src';

export default {
  title: 'Wysiwyg',
  component: FroalaEditor,
} as Meta;

const Template: Story<{}> = (args) => <FroalaEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  model: '<h1>rich text</h1>',
};
