import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
};

export const Secondery: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
  }
};

export const Red: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED
  }
};

export const PrimaryDarck: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
};
PrimaryDarck.decorators = [ThemeDecorator(Theme.DARK)];

export const SeconderDarck: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
  }
};
SeconderDarck.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDarck: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED
  }
};
RedDarck.decorators = [ThemeDecorator(Theme.DARK)];
