import { lazy } from 'react';
import { delayPromise, lazyLoad } from './util';

const MenuPage = lazy(() => delayPromise(import(/* webpackChunkName: "system-menu" */ '@/page/system/menu')));
const UserPage = lazy(() => delayPromise(import(/* webpackChunkName: "system-user" */ '@/page/system/user')));
const UserOnlinePage = lazy(() =>
  delayPromise(import(/* webpackChunkName: "system-user-online" */ '@/page/system/user/online')),
);

const config: any[] = [
  {
    path: 'system',
    children: [
      {
        path: 'menu',
        element: lazyLoad(<MenuPage />),
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            element: lazyLoad(<UserPage />),
          },
          {
            path: 'online',
            element: lazyLoad(<UserOnlinePage />),
          },
        ],
      },
    ],
  },
];

export default config;
