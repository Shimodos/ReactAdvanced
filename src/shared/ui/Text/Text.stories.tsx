import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { Text, TextSize, ThemeText } from './Text';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
  args: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title text here ...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.'
  }
};

export const Error: Story = {
  args: {
    title: 'Title text here ...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.',
    theme: ThemeText.ERROR
  }
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title text here ...'
  }
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.'
  }
};

export const PrimaryDarck: Story = {
  args: {
    title: 'Title text here ...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.'
  }
};
PrimaryDarck.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDarck: Story = {
  args: {
    title: 'Title text here ...'
  }
};
OnlyTitleDarck.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDarck: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.'
  }
};
OnlyTextDarck.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
  args: {
    title: 'Title text here ...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.',
    size: TextSize.L
  }
};

export const SizeM: Story = {
  args: {
    title: 'Title text here ...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.',
    size: TextSize.M
  }
};

export const SizeS: Story = {
  args: {
    title: 'Title text here ...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies turpis. Nullam nec nunc nec nunc ultricies turpis.',
    size: TextSize.S
  }
};
