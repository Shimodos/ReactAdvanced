import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import Dropdown from './Dropdown';
import { Button } from '../Button/Button';

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
    trigger: <Button>Open</Button>,
    items: [
      {
        onClick: () => {},
        content: 'Item 1'
      },
      {
        onClick: () => {},
        content: 'Item 2'
      },
      {
        onClick: () => {},
        content: 'Item 3'
      }
    ]
  }
};
