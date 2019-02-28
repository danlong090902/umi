import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/admin",
        "exact": true,
        "component": require('../admin.js').default
      },
      {
        "path": "/delay",
        "exact": true,
        "component": require('../delay.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index/index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      },
      {
        "path": "/list",
        "exact": false,
        "component": require('../list/_layout.js').default,
        "routes": [
          {
            "path": "/list",
            "exact": true,
            "component": require('../list/index.js').default
          },
          {
            "path": "/list/list",
            "exact": true,
            "component": require('../list/list.js').default
          },
          {
            "path": "/list/search",
            "exact": true,
            "component": require('../list/search/index.js').default
          },
          {
            "component": () => React.createElement(require('F:/study/umi/study-03/with-dva/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
          }
        ]
      },
      {
        "component": () => React.createElement(require('F:/study/umi/study-03/with-dva/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('F:/study/umi/study-03/with-dva/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
