import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRcommendationList } from './ArticleRcommendationList';

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