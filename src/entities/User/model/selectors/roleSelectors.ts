import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const getUserRoles = (state: StateSchema) => state.user.authData?.role;

export const isUserAdmin = createSelector(getUserRoles, (role) =>
  Boolean(role?.includes(UserRole.ADMIN))
);
export const isUserManager = createSelector(getUserRoles, (role) =>
  Boolean(role?.includes(UserRole.MANAGER))
);
