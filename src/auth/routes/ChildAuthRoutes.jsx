import React from 'react';
import { LoginPage, RegisterPage } from '../pages';
import { Navigate } from 'react-router-dom';

export const ChildAuthRoutes = [
  {
    index: true,
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: '/auth/*',
    element: <Navigate to={'/auth/login'} />,
  },
];
