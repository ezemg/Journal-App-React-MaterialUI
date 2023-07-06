import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckAuth } from '../../hooks/useCheckAuth.js';

export const AuthRoutes = () => {
  // const { status } = useCheckAuth(); // Si lo uso se dispara dos veces la acción, una en el AppRouter y otra acá

  const { status } = useSelector((state) => state.auth);

  if (status === 'authenticated') return <Navigate to="/*" />;

  return <Outlet />;
};
