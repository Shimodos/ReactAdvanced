import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteForbidden, getRouteMain } from '@/shared/consfig/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element;
  role?: UserRole[];
}

function RequireAuth({ children, role }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const useRole = useSelector(getUserRoles);

  const hasRequiredRole = useMemo(() => {
    if (!role) {
      return true;
    }

    return role.some((requireRole) => {
      const hasRole = useRole?.includes(requireRole);
      return hasRole;
    });
  }, [role, useRole]);

  if (!hasRequiredRole) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
  }

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  console.log('User Auth Data:', auth);
  console.log('User Roles:', useRole);
  console.log('Required Roles:', role);

  return children;
}

export default RequireAuth;
