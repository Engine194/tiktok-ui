import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/components/Layouts';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';

// Public Routes for guests
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
