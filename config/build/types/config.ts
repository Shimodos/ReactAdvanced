export type DistMode = 'development' | 'production';

export interface DistPath {
  [x: string]: any;
  entry: string;
  dist: string;
  html: string;
  src: string;
  locales: string;
  buildLocale: string;
}

export interface DistEnv {
  mode: DistMode;
  port: number;
  apiUrl: string;
  isGithubPages?: boolean;
}

export interface DistOptions {
  mode: DistMode;
  paths: DistPath;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: 'storybook' | 'frontend' | 'jest';
  isGithubPages?: boolean;
}
