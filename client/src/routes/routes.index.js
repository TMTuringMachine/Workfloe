import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/employee",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <EmployeeDashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/admin",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <AdminDashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);
}

//layouts
const MainLayout = Loadable(
  lazy(() => import("../layouts/mainLayout/mainLayout.component"))
);

const Login = Loadable(lazy(() => import("../pages/login/login.component")));

//employee pages
const EmployeeDashboard = Loadable(
  lazy(() => import("../pages/employeeDashboard/employeeDashboard.component"))
);

//admin pages
const AdminDashboard = Loadable(
  lazy(() => import("../pages/adminDashboard/adminDashboard.component"))
);

const Profile = Loadable(
  lazy(() => import("../pages/profile/profile.component"))
);
