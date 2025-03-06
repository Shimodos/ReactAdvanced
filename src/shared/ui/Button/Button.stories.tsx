import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, SizeButton, ThemeButton } from './Button';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from '@/shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

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

export const Background: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND
  }
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED
  }
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
};

export const OutlineSizel: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L
  }
};

export const OutlineSizeXl: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL
  }
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true
  }
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: SizeButton.L
  }
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: SizeButton.XL
  }
};

export const OutlineDarck: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
};
OutlineDarck.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    disabled: true
  }
};
