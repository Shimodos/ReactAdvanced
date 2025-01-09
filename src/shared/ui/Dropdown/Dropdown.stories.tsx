import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import Dropdown from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    // layout: 'centered',
    // backgrounds: {
    //   default: 'light'
    // }
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
    // value: { control: 'text' }
  }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 'Durward Reynolds'
  }
};
