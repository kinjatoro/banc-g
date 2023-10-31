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
import { useOnBoarding } from './OnBoarding'
import { useMyBar } from './TengoBarAuth'

// ----------------------------------------------------------------------

export default function Router() {
  const { auth } = useAuth();
  const { onBoar } = useOnBoarding();
  const { myBar } = useMyBar();
  
  const routes = useRoutes([

    {
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/inicio" />, index: true },
        { path: 'inicio', element: <LandingPage /> },
        { path: 'eventos', element: <BlogPage /> },
        { path: 'bares', element: <BaresPage /> },
        { path: 'eventos/:idBlog', element: <IndividualBlog />,},
        { path: 'bares/:idBar', element: <IndividualBar />,},
      ],
    },



    {
      path: '/bar',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/inicio" />, index: true },
        { path: 'mispublicaciones', element: <MisPublicacionesPage /> },
        { path: 'comentarios', element: <ComentariosPage /> },
        { path: 'perfil', element: <PerfilBar /> ,},
      ],
    },
    

    {
      path: '/cliente',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/inicio" />, index: true },
        { path: 'perfil', element: <PerfilUsuario /> ,},
      ],
    },






    {
      path: '/login',
      children: [
        {element: <Navigate to="/inicio" />, index: true},
        {path: 'bar', element: <LoginPageBar />,},
        {path: 'cliente', element: <LoginPage />,},
      ],
    },


    {
      path: '/registro',
      children: [
        {element: <Navigate to="/inicio" />, index: true},
        {path: 'bar', element: <RegisterPageBar />,},
        {path: 'cliente', element: <RegisterPage />,},
        {path: 'bar/onboarding', element: <OnBoardingBar />,},
        {path: 'cliente/onboarding', element: <ExpPage />,},
      ],
    },







    
    {path: 'recupero', element: <RecoverPage />,},
    

   
 
    
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/inicio" />, index: true },
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
