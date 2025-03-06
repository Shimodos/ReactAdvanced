import { Profile } from '@/entities/Profile';
import { validateProfileDataError } from '../consts/const';

// export interface EditableProfileCardSchema {}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateError?: validateProfileDataError[];
}
