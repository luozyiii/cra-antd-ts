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
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      ...system,
    ],
  },
  ...base,
];

export default routeConfig;
