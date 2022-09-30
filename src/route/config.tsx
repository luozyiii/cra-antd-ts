import AppLayout from '@/component/layout';
import base from './base';
import system from './system';

import Home from '@/page/home';

const routeConfig = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        title: '首页',
        icon: 'HomeOutlined',
        element: <Home />,
      },
      {
        path: 'home',
        title: '首页',
        icon: 'HomeOutlined',
        element: <Home />,
      },
      ...system,
    ],
  },
  ...base,
];

export default routeConfig;
