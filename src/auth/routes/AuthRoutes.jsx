import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckAuth } from '../../hooks/useCheckAuth.js';

export const AuthRoutes = () => {
  const { status } = useCheckAuth();

  if (status === 'authenticated') return <Navigate to="/*" />;

  return <Outlet />;
};
