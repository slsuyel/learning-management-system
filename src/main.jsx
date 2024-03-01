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
import { Provider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient();

ReactDOM.render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  </AuthProviders>,
  document.getElementById('root')
);
