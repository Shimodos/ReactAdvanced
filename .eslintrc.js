module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    // 'react/jsx-indent': [2, 2],
    // 'react/jsx-indent-props': [2, 2],
    // indent: [2, 2],
    // 'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/no-deprecated': 'off',
    'i18next/no-literal-string': ['warn', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
    // '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi', // Использовать точку с запятой
          requireLast: true // Требовать точку с запятой после последнего члена
        },
        singleline: {
          delimiter: 'semi', // Использовать точку с запятой
          requireLast: false // Не требовать точку с запятой после последнего члена
        }
      }
    ]
  },
  globals: {
    __IS_DEV__: true
  }
};
