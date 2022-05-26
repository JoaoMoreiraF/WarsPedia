import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../sidebar/index';
import DrawerDetail from '../drawer-detail';
import './styles.scss';
import LoadingComponent from '../loading-component';

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex'
      }}
      id="layout-component"
    >
      <LoadingComponent />
      <Sidebar />
      <DrawerDetail />
      <Box component="main" sx={{ flexGrow: 1, padding: '6.5rem 3rem', display: "flex", alignItems: "center", flexDirection: "column"}}>
        {children}
      </Box>
    </Box>
  )
}
