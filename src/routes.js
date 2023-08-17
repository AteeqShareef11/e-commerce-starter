/* eslint-disable import/no-duplicates */
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import UserPage from './pages/Products';

import DashboardAppPage from './pages/DashboardAppPage';
import Home from './src/Pages/Home';
import Login from './src/Pages/Login';

import WebLayout from './src/layout/Layout';
import About from './src/Pages/About';
import Contact from './src/Pages/Contact';
import Terms from './src/Pages/Terms';
import Shipping from './src/Pages/Shipping';
import Refund from './src/Pages/Refund';
import ProductCatgorey from './src/Pages/ProductCatgorey';
import ProductDetail from './src/Pages/ProductDetail';
import Cart from './src/Pages/Cart';
import InformationShiping from './src/Pages/Shiping/InformationShiping';
import ShippingLayout from './src/layout/Shipping';
import ShippingPage from './src/Pages/Shiping/ShippingPage';
import PaymentShipping from './src/Pages/Shiping/PaymentShipping';
import Order from './src/Pages/Shiping/Order';
import Products from './pages/Products';
import NewProducts from './components/products/NewProducts';
import EditProduct from './components/products/EditProduct';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <WebLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'cart', element: <Cart /> },
        { path: 'cart/information', element: <InformationShiping /> },
        { path: 'pages/about', element: <About /> },
        { path: 'pages/contact', element: <Contact /> },
        { path: 'pages/terms', element: <Terms /> },
        { path: 'pages/shipping', element: <Shipping /> },
        { path: 'pages/refund', element: <Refund /> },
        { path: 'pages/:categorey', element: <ProductCatgorey /> },
        { path: 'pages/:categorey/:product', element: <ProductDetail /> },
      ],
    },
    {
      path: '/proceed',
      element: <ShippingLayout />,
      children: [
        { element: <Navigate to="/proceed/information" />, index: true },
        { path: 'information', element: <InformationShiping /> },
        { path: 'information/shipping', element: <ShippingPage /> },
        { path: 'information/shipping/payment', element: <PaymentShipping /> },
        { path: 'information/shipping/payment/order', element: <Order /> },
      ],
    },

    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'products', element: <Products /> },
        { path: 'products/new-product', element: <NewProducts /> },
        { path: 'products/edit-product', element: <EditProduct /> },
        { path: 'orders', element: <UserPage /> },
      ],
    },

    {
      path: 'login',
      element: <Login />,
    },
  ]);

  return routes;
}
