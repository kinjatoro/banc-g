import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  
  {
    title: 'Inicio',
    path: '/dashboard/inicio',
    icon: <Iconify icon={"eva:heart-fill"} />,   
  },
  {
    title: 'perfil',
    path: '/dashboard/perfilbar',
    icon: <Iconify icon={"eva:person-fill"} />,  
  },
  {
    title: 'eventos',
    path: '/dashboard/blog',
    icon: <Iconify icon={"eva:music-fill"} />,  
  },
  {
    title: 'bares',
    path: '/dashboard/bares',
    icon: <Iconify icon={"eva:home-fill"} />,  
  },
  {
    title: 'mis publicaciones',
    path: '/dashboard/mispublicaciones',
    icon: <Iconify icon={'eva:layers-fill'} />
  },
  {
    title: 'comentarios',
    path: '/dashboard/comentarios',
    icon: <Iconify icon={'eva:archive-fill'} />
  },  
];

export default navConfig;