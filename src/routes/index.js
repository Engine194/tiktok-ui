import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/components/Layouts';
import Search from '~/pages/Search';

// Public Routes for guests
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
// Private Routes for members
const privateRoutes = {};

export { privateRoutes, publicRoutes };
