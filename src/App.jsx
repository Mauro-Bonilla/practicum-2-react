// src/App.jsx
import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BuildTheme } from './assets/global/Theme-variable';
import Router from './routes/Router';
import AppProviders from './context';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const routing = useRoutes(Router);
  const theme = BuildTheme();
  return (
    <AppProviders>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routing}
      </ThemeProvider>
    </AppProviders>
  );
}

export default App;