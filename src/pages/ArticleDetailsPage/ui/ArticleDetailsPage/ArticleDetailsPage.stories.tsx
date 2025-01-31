import type { Meta, StoryObj } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { ThemeDecorator } from 'shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';
import { StoreDecorator } from 'shared/consfig/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'page/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};

Light.decorators = [];

export const Dark: Story = {
  args: {}
};

Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({}, {})];
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({}, {})];
