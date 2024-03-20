/* eslint-disable */
import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import InvoiceView from 'src/sections/InvoiceView/InvoiceView';
import RatingApprovalView from 'src/sections/RatingApproval/RatingApproval';

import RolesView from 'src/sections/roles/view/RolesView';
import ShippingView from 'src/sections/shipping/view/ShippingView';
import TransectionView from 'src/sections/Transection/view/TransectionView';
import TermsAndConditions from 'src/sections/termsAndConditions/termsAndConditions';
import PrivacyPolicy from 'src/sections/PrivacyPolicy/PrivacyPolicy';
import AboutUs from 'src/sections/AboutUs/AboutUs';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const OrderPage = lazy(() => import('src/pages/order'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Categorypage = lazy(() => import('src/pages/category'));
export const DiscountCoupon = lazy(() => import('src/pages/DiscountCoupon'));
export const Reviewpage = lazy(() => import('src/pages/review'));
export const Reportspage = lazy(() => import('src/pages/reports'));
export const pagebuilder = lazy(() => import('src/layouts/pagebuilder/pagebuilder'));
export const ContectUs = lazy(() => import('src/pages/ContectDetails'));
export const FAQ = lazy(() => import('src/pages/FAQ'));
export const BannerPage = lazy(() => import('src/pages/BannerPage'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'Banner', element: <BannerPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'order', element: <OrderPage /> },
        { path: 'review', element: <Reviewpage /> },
        { path: 'category', element: <Categorypage /> },
        { path: 'report', element: <Reportspage /> },
        { path: 'discount-coupons', element: <DiscountCoupon /> },
        { path: 'roles', element: <RolesView /> },
        { path: 'shipping', element: <ShippingView /> },
        { path: 'transection', element: <TransectionView /> },
        { path: 'invoice', element: <InvoiceView /> },
        { path: 'rating-approval', element: <RatingApprovalView /> },
        { path: 'terms-and-conditions', element: <TermsAndConditions /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'contect-us', element: <ContectUs /> },
        { path: 'faq', element: <FAQ /> },
        { path: '/page-builder', element: <pagebuilder /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
