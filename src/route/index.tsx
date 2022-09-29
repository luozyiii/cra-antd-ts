import { useRoutes, BrowserRouter } from 'react-router-dom';
import config from './config';

const Routes = () => {
  let routes = useRoutes(config);
  return routes;
};

const RouteWrap = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default RouteWrap;
