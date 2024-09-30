import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import '../../../app/styles/index.scss';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 150,
    src: 'https://www.w3schools.com/w3images/avatar2.png',
    alt: 'Avatar'
  }
};

export const Small: Story = {
  args: {
    size: 100,
    src: 'https://www.w3schools.com/w3images/avatar2.png',
    alt: 'Avatar'
  }
};
