import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Result from './pages/Result';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Channel from './pages/Channel';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Not found!! 😅</div>,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'result',
        element: <Result />
      },
      {
        path: ':channelName',
        element: <Channel />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
