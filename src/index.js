import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#89bf4f',
    },
    secondary: {
      main: '#70e69a',
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);


