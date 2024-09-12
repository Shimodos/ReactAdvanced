import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
import { StoreDecorator } from 'shared/consfig/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'page/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

Light.decorators = [StoreDecorator({}, {})];

export const Dark: Story = {
  args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({}, {})];
