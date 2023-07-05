import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckAuth } from '../../hooks/useCheckAuth.js';

export const JournalRoutes = () => {
  const { status } = useCheckAuth();

  if (status === 'not-authenticated') return <Navigate to="/auth/login" />;

  return <Outlet />;
};
