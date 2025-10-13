import { createBrowserRouter } from "react-router-dom";
import Login from "../ui/pages/Login";
import Home from "../ui/pages/Home";
import Profile from "../ui/pages/Profile";
import NotFound from "../ui/pages/NotFound";
import Users from "../ui/pages/Users";
import Menu from "../ui/pages/Menu";
import DefaultLayout from "../ui/layouts/DefaultLayout";
import History from "../ui/pages/History";
import { AuthGuard } from "./AuthGuard";
import Products from "../ui/components/Products";
import Category from "../ui/components/Category";

export const router = createBrowserRouter([

  {
    element: <AuthGuard isPrivate={false} />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    element: <AuthGuard isPrivate />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/history", element: <History /> },
          {
             path: "/menu",
            element: <Menu />,
            children: [
              {
                index: true,
                element: <Products />
              },
              {
                path: "products",
                element: <Products />
              },
              {
                path: "category",
                element: <Category />
              },
            ]
          },
          { path: "/users", element: <Users /> },
          { path: "/profile", element: <Profile /> },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
