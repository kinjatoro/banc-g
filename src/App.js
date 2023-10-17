import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './Auth';
import { BarProvider } from './TengoBarAuth';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  const [auth, setAuth] = useState(false);
  const [myBar, setMyBar] = useState(false);



  return (   
    <AuthProvider value={{ auth, setAuth }}>
    <BarProvider value={{ myBar, setMyBar }}>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />      
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
    </BarProvider>
    </AuthProvider>
  );
}
