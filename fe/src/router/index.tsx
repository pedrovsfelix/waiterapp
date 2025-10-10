import { createBrowserRouter } from "react-router-dom";
import Login from "../ui/pages/Login";
import Home from "../ui/pages/Home";
import Profile from "../ui/pages/Profile";
import NotFound from "../ui/pages/NotFound";
import Users from "../ui/pages/Users";
import Menu from "../ui/pages/Menu";
import DefaultLayout from "../ui/layouts/DefaultLayout";
import History from "../ui/pages/History";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/history',
        element: <History />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
