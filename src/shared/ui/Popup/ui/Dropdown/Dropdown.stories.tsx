import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { MyDropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

const meta = {
  title: 'shared/Dropdown',
  component: MyDropdown,
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
} satisfies Meta<typeof MyDropdown>;

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
