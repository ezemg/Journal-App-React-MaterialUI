import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { AuthRoutes, ChildAuthRoutes } from '../auth/routes';

import { JournalRoutes, ChildJournalRoutes } from '../journal/routes';
import { CheckingAuth } from '../ui/components/CheckingAuth.jsx';
import { useCheckAuth } from '../hooks/useCheckAuth.js';

const routerConfig = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
    children: ChildAuthRoutes,
  },
  {
    path: '/',
    element: <JournalRoutes />,
    children: ChildJournalRoutes,
  },
  {
    path: '/',
    element: <Navigate to={'/'} />,
  },
];

const router = createBrowserRouter(routerConfig);

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return <RouterProvider router={router} />;
};
