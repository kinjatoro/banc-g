// component
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  
  {
    title: 'Inicio',
    path: '/inicio',
    icon: <Iconify icon={"eva:heart-fill"} />,   
  },
  {
    title: 'perfil',
    path: '/bar/perfil',
    icon: <Iconify icon={"eva:person-fill"} />,  
  },
  {
    title: 'eventos',
    path: '/eventos',
    icon: <Iconify icon={"eva:music-fill"} />,  
  }, 
  {
    title: 'bares',
    path: '/bares',
    icon: <Iconify icon={"eva:home-fill"} />,  
  },
];

export default navConfig;
