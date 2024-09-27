export type { Profile, ProfileSchema } from './model/type/profile';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
export { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
export { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
export { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
