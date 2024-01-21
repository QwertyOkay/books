import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import HelmetHead from 'components/HelmetHead';
import Home from './pages/Home';
import LoaderIcon from 'components/LoaderIcon/LoaderIcon';

import './styles/global.scss';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
}; 

const Product = React.lazy(() => import('./pages/Product/Product'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <HelmetHead />
      <Suspense fallback={<LoaderIcon />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
