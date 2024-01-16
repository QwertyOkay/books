import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
// import { GetCookies } from 'hooks/useCookies';
import 'react-toastify/dist/ReactToastify.css';

// import Header from 'components/Header';
// import Footer from 'components/Footer';
import HelmetHead from 'components/HelmetHead';
// import Cookies from 'components/CookiesModal';
import Home from './pages/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
// import Terms from './pages/Terms';
// import Privacy from './pages/Privacy';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Returns from './pages/Returns';
// import Delivery from './pages/Delivery';
// import Warranty from './pages/Warranty';
import './styles/global.scss';

const Layout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer autoClose={2000} transition={Slide} theme="dark" />
    </>
  );
};

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
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:category',
        element: <Products />,
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
