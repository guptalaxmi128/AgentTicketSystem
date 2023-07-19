import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import SimpleLayout from './layouts/simple';
//
// import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
// import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Ticket from './pages/Ticket';
import CreateTicket from './pages/CreateTicket';
import Profile from './pages/profile/Profile';
import UpdateTicket from './pages/updateTicket/UpdateTicket';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'create-ticket', element: <CreateTicket /> },
        { path: 'ticket', element: <Ticket /> },
        { path: 'profile', element: <Profile /> },
        { path: 'update-ticket', element: <UpdateTicket /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    // {
    //   path: 'dashboard/create-ticket',
    //   element: <CreateTicket />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
