// import BreedDetails from '../pages/BreedDetails/BreedDetails';
// import Home from '../pages/Home/Home';

import loadable from '@loadable/component';

const Home = loadable(() => import('../pages/Home/Home'), {
   ssr: true
 });

const routes = [
    {
            path: "/",
           index: true,
           component: Home,
  }
];

export default routes;
