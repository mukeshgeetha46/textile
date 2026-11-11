import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import SareesPage from '../pages/SareesPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import FabricsByMeterPage from '../pages/FabricsByMeterPage';
import KurtasPage from '../pages/KurtasPage';
import BridalHeritagePage from '../pages/BridalHeritagePage';
import HandloomEditionsPage from '../pages/HandloomEditionsPage';
import FabricCarePage from '../pages/FabricCarePage';
import WishlistPage from '../pages/WishlistPage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import CuratorDeskPage from '../pages/CuratorDeskPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'sarees',
        element: <SareesPage />,
      },
      {
        path: 'sarees/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'fabrics-by-meter',
        element: <FabricsByMeterPage />,
      },
      {
        path: 'kurtas',
        element: <KurtasPage />,
      },
      {
        path: 'bridal-heritage',
        element: <BridalHeritagePage />,
      },
      {
        path: 'handloom-editions',
        element: <HandloomEditionsPage />,
      },
      {
        path: 'fabric-care',
        element: <FabricCarePage />,
      },
      {
        path: 'wishlist',
        element: <WishlistPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'customer-profile',
        element: <ProfilePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'admin-inventory',
        element: <CuratorDeskPage />,
      },
      {
        path: 'curator-desk',
        element: <CuratorDeskPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
