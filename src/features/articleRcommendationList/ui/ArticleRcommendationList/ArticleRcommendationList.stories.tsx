import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRcommendationList } from './ArticleRcommendationList';
import { ThemeDecorator } from '@/shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/consfig/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'features/ArticleRcommendationList',
  component: ArticleRcommendationList,
  parameters: {
    // layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof ArticleRcommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({}, {})];
