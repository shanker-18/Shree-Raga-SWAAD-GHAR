import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
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
=======
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
>>>>>>> 74421ed2cd02417c4f930964ca1c2b8c2be28c7f
  </StrictMode>
);
