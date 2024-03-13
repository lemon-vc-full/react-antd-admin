import Menu from '@/views/auth/menu/Menu';
import Role from '@/views/auth/role/Role';
import User from '@/views/auth/user/User';
import Home from '@/views/home/Home';
import Layout from '@/views/layout/Layout';
import Login from '@/views/login/Login';
import NotFound from '@/views/not-found/NotFound';
import Welcome from '@/views/welcome/WelCome';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate to="/welcome" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/auth',
        element: <Navigate to="/auth/user" />,
      },
      {
        path: '/auth',
        element: <Layout />,
        children: [
          {
            path: '/auth/user',
            element: <User />,
          },
          {
            path: '/auth/role',
            element: <Role />,
          },
          {
            path: '/auth/menu',
            element: <Menu />,
          },
        ],
      },
      {
        path: '/notFound',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/notFound" />,
  },
];

export default routes;
