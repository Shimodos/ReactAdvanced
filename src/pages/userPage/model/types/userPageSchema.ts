export interface UserPageSchema {
  id: string;
  name: string;
  email: string;
  age?: number; // optional property
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  formData: {
    id: string;
    name: string;
    email: string;
    age?: number; // optional property
  };
}
