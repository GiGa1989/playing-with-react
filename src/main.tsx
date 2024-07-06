import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Clipboard from './pages/clipboard/clipboard';
import ContextPage from './pages/context/context-page';
import MemoPage from './pages/memo/memo';
import UserPostsIndex from './pages/memo2/UserPostsIndex';
import PortalPage from './pages/portal/portal';
import ReactQuery from './pages/react-query/react-query';

import './index.css';
import ZustandPage from './pages/zustand/zustand';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/portal',
    element: <PortalPage />,
  },
  {
    path: '/memo',
    element: <MemoPage />,
  },
  {
    path: '/memo2',
    element: <UserPostsIndex />,
  },
  {
    path: '/context',
    element: <ContextPage />,
  },
  {
    path: '/react-query',
    element: <ReactQuery />,
  },
  {
    path: '/zustand',
    element: <ZustandPage />,
  },
  {
    path: '/copyToClipboard',
    element: <Clipboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
