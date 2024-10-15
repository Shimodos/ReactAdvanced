import type { Meta, StoryObj } from '@storybook/react';
// import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
  args: {}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
};

export const NormalDarck: Story = {
  args: {
    width: '100%',
    height: 200
  }
};

NormalDarck.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDarck: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
};

CircleDarck.decorators = [ThemeDecorator(Theme.DARK)];
