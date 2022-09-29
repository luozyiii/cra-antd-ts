import { lazy } from 'react';
import { delayPromise, lazyLoad } from './util';

import NotFound from '@/page/not-found';
const Login = lazy(() => delayPromise(import(/* webpackChunkName: "login" */ '@/page/login')));

const routeConfig: any[] = [
  {
    path: 'login',
    element: lazyLoad(<Login />),
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routeConfig;
