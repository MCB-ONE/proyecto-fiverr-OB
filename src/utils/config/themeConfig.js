import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1dbf73',
    },
    secondary: {
      main: '#4a73e8',
    },
    warning: {
      main: '#efdb0a',
    },
    success: {
      main: '#0AEF81',
    },
    error: {
      main: '#d32f2f',
    },
    text: {
      primary: '#7a7d85',
      secondary: '#222325',
    },
    background: {
      default: '#ffffff',
      paper: '#fffefe',
    },
    divider: '#e4e5e7',
  },
});

export default theme;
