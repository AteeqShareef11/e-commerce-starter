/* eslint-disable import/order */
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import './index.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartTotal } from './Redux/slice/cartSlice';

// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
