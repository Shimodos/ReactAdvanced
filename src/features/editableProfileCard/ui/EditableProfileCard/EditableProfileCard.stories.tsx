import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    id: 'example-id'
  }
};
