import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes, ChildAuthRoutes } from '../auth/routes';
import { JournalRoutes, ChildJournalRoutes } from '../journal/routes';

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
];

const router = createBrowserRouter(routerConfig);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
