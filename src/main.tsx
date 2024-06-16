import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ContextPage from './pages/context/context-page';
import MemoPage from './pages/memo/memo';
import UserPostsIndex from './pages/memo2/UserPostsIndex';
import PortalPage from './pages/portal/portal';
import ReactQuery from './pages/react-query/react-query';
import ZustandPage from './pages/zustand/zustand';
import ZustandPage2 from './pages/zustand/zustand2';

import './index.css';

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
    path: '/zustand1',
    element: <ZustandPage />,
  },
  {
    path: '/zustand2',
    element: <ZustandPage2 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
