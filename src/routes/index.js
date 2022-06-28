import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import config from '~/config';

// Public Routes for guests
const { routes: routesConfig } = config;
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];
// Private Routes for members
const privateRoutes = {};

export { privateRoutes, publicRoutes };
