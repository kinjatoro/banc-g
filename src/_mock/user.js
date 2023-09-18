import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample(['Ezequiel', 'Neistadt',
  'Luis', 'María', 'Fredes',
  'Lucas', 'Muras',
  'Juan Ignacio', 'Boiko',
  'Esteban', 'Loza',
  'Ignacio', 'Prados',
  'Federico', 'Solanes',
  'Nicolás', 'Parilla',
  'Santiago', 'Carrasco', 'Vera',
  'Macareno', 'Iacob', 'Meltor',]),
  company: sample(['Clases de inglés',
    'Clases de natación',
    'Clases de Guitarra',
    'Cuidado de niños',
    'Tutoría Escolar',
    'Clases de Piano',
    'Clases particulares de Base de Datos']),
  
  status: sample(['Aceptada', 'Finalizada', 'Cancelada']),
  role: sample([
    '17/04/23',
    '19/04/23',
    '24/04/23',
    '03/05/23',
    '08/05/23',
    '15/05/23',
    '26/05/23',
    '04/06/23',
    '13/06/23',
    '28/06/23',
  ]),
}));

export default users;
