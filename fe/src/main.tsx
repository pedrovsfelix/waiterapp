import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <App>
    <RouterProvider router={router} />
  </App>
);
