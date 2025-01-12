import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import Listbox from './ListBox';

const meta = {
  title: 'shared/Listbox',
  component: Listbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
    // value: { control: 'text' }
  }
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DownLeft: Story = {
  args: {
    value: 'Durward',
    direction: 'down left',
    items: [
      { value: 'Durward Reynolds', content: 'Durward Reynolds' },
      { value: 'Kenton Towne', content: 'Kenton Towne' },
      { value: 'Therese Wunsch', content: 'Therese Wunsch' },
      { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
      { value: 'Katelyn Rohan', content: 'Katelyn Rohan' }
    ]
  }
};

export const UpLeft: Story = {
  args: {
    value: 'Durward',
    direction: 'up left',
    items: [
      { value: 'Durward Reynolds', content: 'Durward Reynolds' },
      { value: 'Kenton Towne', content: 'Kenton Towne' },
      { value: 'Therese Wunsch', content: 'Therese Wunsch' },
      { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
      { value: 'Katelyn Rohan', content: 'Katelyn Rohan' }
    ]
  }
};

export const DownRight: Story = {
  args: {
    value: 'Durward',
    direction: 'down right',
    items: [
      { value: 'Durward Reynolds', content: 'Durward Reynolds' },
      { value: 'Kenton Towne', content: 'Kenton Towne' },
      { value: 'Therese Wunsch', content: 'Therese Wunsch' },
      { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
      { value: 'Katelyn Rohan', content: 'Katelyn Rohan' }
    ]
  }
};

export const UpRight: Story = {
  args: {
    value: 'Durward',
    direction: 'up right',
    items: [
      { value: 'Durward Reynolds', content: 'Durward Reynolds' },
      { value: 'Kenton Towne', content: 'Kenton Towne' },
      { value: 'Therese Wunsch', content: 'Therese Wunsch' },
      { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
      { value: 'Katelyn Rohan', content: 'Katelyn Rohan' }
    ]
  }
};
