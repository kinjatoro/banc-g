// component
import SvgColor from '../../../components/svg-color';

import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Inicio',
    path: '/dashboard/app',
    icon: <Iconify icon={"eva:heart-fill"} />,   
  },
  {
    title: 'servicios',
    path: '/dashboard/blog',
    icon: <Iconify icon={"eva:briefcase-fill"} />,  
  },
  {
    title: 'Contrataciones',
    path: '/dashboard/user',
    icon: <Iconify icon={"eva:people-fill"} />,
  },
  {
    title: 'mensajes',
    path: '/dashboard/mensajes',
    icon: <Iconify icon={'eva:message-square-fill'} />  
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
