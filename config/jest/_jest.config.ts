import path from 'path';

export default {
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest'
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>', '<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  rootDir: '../../',
  // testPathIgnorePatterns: ['<rootDir>node_modules/'],
  // transform: {
  //   '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  // },
  // transformIgnorePatterns: ['/node_modules/(?!axios)/'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/report/unit',
        filename: 'report.html',
        openReport: true,
        pageTitle: 'Unit Tests Report',
        inlineSource: true
      }
    ]
  ]
};
