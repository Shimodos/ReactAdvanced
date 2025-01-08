import type { Meta, StoryObj } from '@storybook/react';
import '../../../app//styles/index.scss';
import Listbox from './ListBox';

const meta = {
  title: 'shared/Listbox',
  component: Listbox,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
    // value: { control: 'text' }
  }
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 'Durward Reynolds'
  }
};
