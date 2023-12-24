import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider, useSelector } from 'react-redux';

import { store } from "./redux/store.js";
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

function ThemedApp() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: '#fff',
      },
      secondary: {
        light: '#dcedc8',
        main: '#9ccc65',
        dark: '#33691e',
        contrastText: '#fff',
      },
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemedApp />
  </Provider>,
);