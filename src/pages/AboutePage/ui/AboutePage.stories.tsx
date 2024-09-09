import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutePage from './AboutePage';
import { StoreDecorator } from 'shared/consfig/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'page/AboutePage',
  component: AboutePage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof AboutePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
