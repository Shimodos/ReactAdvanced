import type { Meta, StoryObj } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { ThemeDecorator } from '@/shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/consfig/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
    // value: { control: 'text' }
  }
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator(
    {
      user: { authData: {} }
    },
    {}
  )
];

export const Dark: Story = {
  args: {}
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator(
    {
      user: { authData: {} }
    },
    {}
  )
];

export const NoAuth: Story = {
  args: {}
};

NoAuth.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator(
    {
      user: {}
    },
    {}
  )
];
