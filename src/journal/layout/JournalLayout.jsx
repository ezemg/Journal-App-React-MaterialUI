import { Box } from '@mui/material';
import React from 'react';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* {Navbar} */}
      {/* {SideBar} */}

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
