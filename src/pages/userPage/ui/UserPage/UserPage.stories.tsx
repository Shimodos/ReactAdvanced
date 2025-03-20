import type { Meta, StoryObj } from '@storybook/react';
import { UserPage } from './UserPage';

const meta = {
  title: 'pages/UserPage',
  component: UserPage,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof UserPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
