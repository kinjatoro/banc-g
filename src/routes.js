import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';

import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import BaresPage from './pages/BaresPage';
import MisPublicacionesPage from './pages/MisPublicacionesPage';
import ComentariosPage from './pages/ComentariosPage';
import IndividualBlog from './pages/IndividualBlog';
import ExpPage from './pages/ExpPage';
import RecoverPage from './pages/RecoverPage';
import CrearServicioPage from './pages/CrearServicioPage';
import PerfilBar from './pages/PerfilBar';
import IndividualBar from './pages/IndividualBar';





// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/inicio" />, index: true },
        { path: 'inicio', element: <LandingPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'mispublicaciones', element: <MisPublicacionesPage /> },
        { path: 'bares', element: <BaresPage /> },
        { path: 'comentarios', element: <ComentariosPage /> },
        { path: 'individualblog/:idBlog', element: <IndividualBlog />,},
        { path: 'individualbar/:idBar', element: <IndividualBar />,},
        { path: 'crearservicio', element: <CrearServicioPage />,},
        { path: 'perfilbar', element: <PerfilBar />,},
      ],
    },
    
    {path: 'login', element: <LoginPage />,},
    {path: 'register', element: <RegisterPage />,},
    {path: 'experiencia', element: <ExpPage />,},
    {path: 'recupero', element: <RecoverPage />,},
    
    
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/inicio" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
