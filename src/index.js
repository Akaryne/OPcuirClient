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
      main: '#ffd700',
    },
    secondary: {
      main: '#cf8d00',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Bodoni, serif', // Utilisez la police "Bodoni" ou celle que vous avez choisie
      fontSize: '2.5rem', // Personnalisez la taille de la police
      fontWeight: 700, // Personnalisez le poids de la police
      // Autres styles de typographie personnalisés...
    },
    h2: {
      fontFamily: 'Bodoni, serif', // Utilisez la police "Bodoni" ou celle que vous avez choisie
      fontSize: '2rem', // Personnalisez la taille de la police
      fontWeight: 500, // Personnalisez le poids de la police
      // Autres styles de typographie personnalisés...
    },
    h3: {
      fontFamily: 'Bodoni, serif', // Utilisez la police "Bodoni" ou celle que vous avez choisie
      fontSize: '1.5rem', // Personnalisez la taille de la police
      fontWeight: 300, // Personnalisez le poids de la police
      // Autres styles de typographie personnalisés...
    },
    body2:{
      fontFamily: 'Bodoni, serif',
      fontWeight: 600,
    },
    subtitle:{
      fontFamily: 'Bodoni, serif',
      fontWeight: 400,
    }
  },
  components: {
    // Name of the component
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'black',
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            color: '#cf8d00', // Changer la couleur du texte pour les onglets sélectionnés
          },
        },
        labelIcon: {
          color: 'black', // Couleur du label des onglets
        },
      },
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


