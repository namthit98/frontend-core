import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateTodo from '../views/Todo/CreateTodo';
import NotFound from '../views/NotFound/NotFound';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Dashboard from '../views/Dashboard/Dashboard';
import Todos from '../views/Todo/Todos';

let routeIndex = 0;
let subRouteIndex = 0;
export const routes = [
  {
    id: routeIndex++,
    icon: <InboxIcon />,
    text: 'Trang chủ',
    path: '/',
    exact: true,
    main: Dashboard,
    visibleOnMenu: true,
    layout: 'main-layout',
  },
  {
    id: `sub${subRouteIndex++}`,
    icon: <DraftsIcon />,
    text: 'Quản lý Todo',
    exact: true,
    visibleOnMenu: true,
    layout: 'main-layout',
    subRoutes: [
      {
        id: routeIndex++,
        icon: <InboxIcon />,
        text: 'Danh sách todo',
        path: '/todos',
        exact: true,
        main: Todos,
        visibleOnMenu: true,
        layout: 'main-layout',
      },
      {
        id: routeIndex++,
        icon: <DraftsIcon />,
        text: 'Tạo Todo',
        path: '/todos/create',
        exact: true,
        main: CreateTodo,
        visibleOnMenu: true,
        layout: 'main-layout',
      },
    ],
  },
  {
    id: routeIndex++,
    icon: <DraftsIcon />,
    text: 'Not Found',
    path: '/',
    exact: false,
    main: NotFound,
    visibleOnMenu: false,
    layout: 'main-layout',
  },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map(route => {
        if (!route.subRoutes) {
          return (
            <Route key={route.id} path={route.path} exact={route.exact} component={route.main} />
          );
        }

        return route.subRoutes.map(subRoute => {
          return (
            <Route
              key={subRoute.id}
              path={subRoute.path}
              exact={subRoute.exact}
              component={subRoute.main}
            />
          );
        });
      })}
    </Switch>
  );
};

export default Routes;
