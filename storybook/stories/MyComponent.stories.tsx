import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyComponent } from '../../src';

export default {
  title: 'Wysiwyg',
  component: MyComponent,
} as Meta;

const Template: Story<{}> = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  model: '<h1>Hello World</h1>',
};
