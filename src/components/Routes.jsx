import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todos from '../views/Todo/Todos'
import CreateTodo from '../views/Todo/CreateTodo'
import NotFound from '../views/NotFound/NotFound'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

let routeIndex = 0
let subRouteIndex = 0
export const routes = [
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
  {
    id: `sub${subRouteIndex++}`,
    icon: <DraftsIcon />,
    text: 'Submenu',
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
  // {
  //   id: `sub${subRouteIndex++}`,
  //   icon: 'shopping',
  //   text: 'Quản lý sản phẩm',
  //   exact: true,
  //   visibleOnMenu: true,
  //   layout: 'main',
  //   subRoute: [
  //     {
  //       id: routeIndex++,
  //       text: 'Tất cả sản phẩm',
  //       path: '/products',
  //       exact: true,
  //       main: withMainLayout(Product),
  //       visibleOnMenu: true,
  //       layout: 'main',
  //     },
  //     {
  //       id: routeIndex++,
  //       text: 'Thêm sản phẩm',
  //       path: '/products/create',
  //       exact: true,
  //       main: withMainLayout(Product),
  //       visibleOnMenu: true,
  //       layout: 'main',
  //     },
  //   ],
  // },
  // {
  //   id: `sub${subRouteIndex++}`,
  //   icon: 'book',
  //   text: 'Quản lý đơn hàng',
  //   exact: true,
  //   visibleOnMenu: true,
  //   layout: 'main',
  //   subRoute: [
  //     {
  //       id: routeIndex++,
  //       text: 'Tất cả đơn hàng',
  //       path: '/orders',
  //       exact: true,
  //       main: withMainLayout(Order),
  //       visibleOnMenu: true,
  //       layout: 'main',
  //     },
  //   ],
  // },
  // {
  //   id: `sub${subRouteIndex++}`,
  //   icon: 'shop',
  //   text: 'Quản lý cửa hàng',
  //   exact: true,
  //   visibleOnMenu: true,
  //   layout: 'main',
  //   subRoute: [
  //     {
  //       id: routeIndex++,
  //       text: 'Danh mục của cửa hàng',
  //       path: '/shops',
  //       exact: true,
  //       main: withMainLayout(Shop),
  //       visibleOnMenu: true,
  //       layout: 'main',
  //     },
  //     {
  //       id: routeIndex++,
  //       text: 'Thiết lập cửa hàng',
  //       path: '/shops',
  //       exact: true,
  //       main: withMainLayout(Shop),
  //       visibleOnMenu: true,
  //       layout: 'main',
  //     },
  //   ],
  // },
  // {
  //   id: routeIndex++,
  //   icon: 'printer',
  //   text: 'Đơn hàng',
  //   path: '/sale-entries',
  //   exact: true,
  //   main: withSaleLayout(SaleEntry),
  //   visibleOnMenu: true,
  //   layout: 'sale',
  // },
]

const Routes = () => {
  return (
    <Switch>
      {routes.map(route => {
        if (!route.subRoute) {
          return (
            <Route key={route.id} path={route.path} exact={route.exact} component={route.main} />
          )
        }

        return route.subRoute.map(route => {
          return (
            <Route key={route.id} path={route.path} exact={route.exact} component={route.main} />
          )
        })
      })}
    </Switch>
  )
}

export default Routes
