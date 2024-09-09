export interface LoginSchema {
  username: string;
  password: string;
  isLogged: boolean;
  error?: string;
}
