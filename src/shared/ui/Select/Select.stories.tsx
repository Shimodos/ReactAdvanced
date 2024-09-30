import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import '../../../app/styles/index.scss';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Select',
    options: [
      { value: '1', constent: 'Option 1' },
      { value: '2', constent: 'Option 2' },
      { value: '3', constent: 'Option 3' }
    ]
  }
};
