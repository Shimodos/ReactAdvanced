import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import '../../../../app/styles/index.scss';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs']
  // argTypes: {
  //   // backgroundColor: { control: 'color' }
  // }
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: '',
    value: undefined,
    onChange: () => {}
  }
};
