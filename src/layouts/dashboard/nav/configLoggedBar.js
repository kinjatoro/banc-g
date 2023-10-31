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
  {
    title: 'mis publicaciones',
    path: '/bar/mispublicaciones',
    icon: <Iconify icon={'eva:layers-fill'} />
  },
  {
    title: 'comentarios',
    path: '/bar/comentarios',
    icon: <Iconify icon={'eva:archive-fill'} />
  },  
];

export default navConfig;