// import type { Meta, StoryObj } from '@storybook/react';
// import { LoginForm } from './LoginForm';

// const meta = {
//   title: 'feature/LoginForm',
//   component: LoginForm,
//   parameters: {
//     layout: 'centered'
//   },
//   tags: ['autodocs'],
//   argTypes: {},
//   args: {}
// } satisfies Meta<typeof LoginForm>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/consfig/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [
  StoreDecorator(
    {
      loginForm: { username: '123', password: '321' }
    },
    {}
  )
];

// Пример с пустыми полями
export const EmptyForm: Story = {};
EmptyForm.decorators = [
  StoreDecorator(
    {
      loginForm: { username: '', password: '' }
    },
    {}
  )
];

// Пример с ошибкой
export const WithError: Story = {};
WithError.decorators = [
  StoreDecorator(
    {
      loginForm: { username: '', password: '', error: 'Неверный логин или пароль' }
    },
    {}
  )
];
