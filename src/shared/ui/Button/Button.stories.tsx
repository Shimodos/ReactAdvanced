import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ThemeButton } from './Button';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text'
  }
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
};

export const OutlineDarck: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
};
OutlineDarck.decorators = [ThemeDecorator(Theme.DARK)];
