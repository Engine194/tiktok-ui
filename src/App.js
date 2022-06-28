import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { isEmpty, isNull, isUndefined } from 'lodash';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {!isEmpty(publicRoutes) &&
            publicRoutes.map((publicRoute, index) => {
              const publicLayout = publicRoute?.layout;
              let Layout;
              switch (true) {
                case !isEmpty(publicLayout):
                  Layout = publicRoute.layout;
                  break;
                case isNull(publicLayout):
                  Layout = Fragment;
                  break;
                case isUndefined(publicLayout):
                  Layout = DefaultLayout;
                  break;
                default:
                  Layout = DefaultLayout;
                  break;
              }
              const ComponentPage = publicRoute.component;
              return <Route key={index} path={publicRoute.path} element={<Layout children={<ComponentPage />} />} />;
            })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
