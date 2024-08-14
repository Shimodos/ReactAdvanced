export type DistMode = 'development' | 'production';

export interface DistPath {
  [x: string]: any;
  entry: string;
  dist: string;
  html: string;
  src: string;
}

export interface DistEnv {
  mode: DistMode;
  port: number;
}

export interface DistOptions {
  mode: DistMode;
  paths: DistPath;
  isDev: boolean;
  port: number;
}
