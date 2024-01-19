import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelmetHead from 'components/HelmetHead';
import Home from './pages/Home';
import Product from './pages/Product/Product';

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
