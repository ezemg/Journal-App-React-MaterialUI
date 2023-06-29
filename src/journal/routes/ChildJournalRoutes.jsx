import React from 'react';

import { Navigate } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage.jsx';

export const ChildJournalRoutes = [
  {
    index: true,
    element: <JournalPage />,
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />,
  },
];
