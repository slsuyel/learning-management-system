import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import '@smastrom/react-rating/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProviders from './Providers/AuthProviders';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  </AuthProviders>,
  document.getElementById('root')
);
