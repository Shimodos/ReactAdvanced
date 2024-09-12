import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { ThemeButton } from 'shared/ui/Button/Button';
import { StoreDecorator } from 'shared/consfig/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta> & { theme?: string };

export const Light: Story = {
  args: {}
};
Light.decorators = [StoreDecorator({}, {})];

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({}, {})];

export const ClearInverted: Story = {
  args: {},
  theme: ThemeButton.CLEAR_INVERTED
};
ClearInverted.decorators = [StoreDecorator({}, {})];
