/* eslint-disable */
import SvgColor from 'src/components/svg-color';

import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import PercentTwoToneIcon from '@mui/icons-material/PercentTwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Category',
    path: '/category',
    icon: <CategoryTwoToneIcon />,
  },
  {
    title: 'Review',
    path: '/review',
    icon: <ReviewsTwoToneIcon />,
  },
  {
    title: 'Report',
    path: '/report',
    icon: <AssessmentTwoToneIcon />,
  },
  // {
  //   title: 'Page builder',
  //   path: '/page-builder',
  //   icon: icon('ic_cart'),
  // },
  {
    title: 'order',
    path: '/order',
    icon: <InventoryTwoToneIcon />,
  },
  {
    title: 'Coupons',
    path: '/discount-coupons',
    icon: <PercentTwoToneIcon />,
  },
  {
    title: 'Roles',
    path: '/roles',
    icon: <ManageAccountsTwoToneIcon />,
  },
  {
    title: 'Shipping',
    path: '/shipping',
    icon: <LocalShippingTwoToneIcon />,
  },
  {
    title: 'Transection',
    path: '/transection',
    icon: <CurrencyExchangeTwoToneIcon />,
  },
  {
    title: 'Invoice',
    path: '/invoice',
    icon: <DescriptionTwoToneIcon />,
  },
  {
    title: 'Contect Us',
    path: '/Contect-us',
    icon: <MarkunreadTwoToneIcon />,
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: <LiveHelpTwoToneIcon />,
  },
  {
    title: 'Rating Approval',
    path: '/rating-approval',
    icon: <ThumbUpTwoToneIcon />,
  },
  {
    title: 'Terms and Conditions',
    path: '/terms-and-conditions',
    icon: <ChecklistTwoToneIcon />,
  },
  {
    title: 'Privacy Policy',
    path: '/privacy-policy',
    icon: <SecurityTwoToneIcon />,
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <GroupsTwoToneIcon />,
  },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
  // {
  //   title: 'customer',
  //   path: '/customer',
  //   icon: icon('ic_analytics'),
  // },
];

export default navConfig;
