import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './contexts/CartContext';
import { DemoProvider } from './contexts/DemoContext';

// EmailJS initialization removed

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
      <DemoProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DemoProvider>
    </BrowserRouter>
  </StrictMode>
);
