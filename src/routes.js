import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';

import LoginPage from './pages/LoginPage';
import LoginPageBar from './pages/LoginPageBar';
import Page404 from './pages/Page404';
import RegisterPage from './pages/RegisterPage';
import RegisterPageBar from './pages/RegisterPageBar';
import LandingPage from './pages/LandingPage';
import BaresPage from './pages/BaresPage';
import MisPublicacionesPage from './pages/MisPublicacionesPage';
import ComentariosPage from './pages/ComentariosPage';
import IndividualBlog from './pages/IndividualBlog';
import ExpPage from './pages/ExpPage';
import RecoverPage from './pages/RecoverPage';
import OnBoardingBar from './pages/OnBoardingBar';
import PerfilBar from './pages/PerfilBar';
import PerfilUsuario from './pages/PerfilUsuario';
import IndividualBar from './pages/IndividualBar';
import { useAuth } from './Auth'

// ----------------------------------------------------------------------

export default function Router() {
  const { auth } = useAuth();
  
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
        
        
        { 
          path: 'perfilbar', 
          element: <PerfilBar /> ,
        },
        { 
          path: 'perfilusuario', 
          element:  <PerfilUsuario />  ,
        },
      ],
    },
    
    {path: 'login', element: <LoginPage />,},
    {path: 'loginbar', element: <LoginPageBar />,},
    {path: 'register', element: <RegisterPage />,},
    {path: 'registerbar', element: <RegisterPageBar />,},
    {path: 'experiencia', element: <ExpPage />,},
    {path: 'recupero', element: <RecoverPage />,},
    { path: 'onboardingbar', element: <OnBoardingBar />,},
 
    
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
