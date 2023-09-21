import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample(['Ezequiel', 'Neistadt', 'Agustín', 'Carlos', 'Manuel', 'José', 'Joaquín', 'Roberto', 'Gomez', 'Lopez', 'Perez', 'Díaz',
  'Luis', 'María', 'Fredes',
  'Lucas', 'Muras',
  'Juan Ignacio', 'Boiko',
  'Esteban', 'Loza',
  'Ignacio', 'Prados',
  'Federico', 'Solanes',
  'Nicolás', 'Parilla',
  'Santiago', 'Carrasco', 'Vera',
  'Macareno', 'Iacob', 'Meltor',]),

  servicio: sample(['Clases de inglés',
    'Clases de natación',
    'Clases de Guitarra',
    'Cuidado de niños',
    'Tutoría Escolar',
    'Clases de Piano',
    'Clases de BD']),

  telefono: sample([
    '11-3928-3234',
    '11-6436-3455',
    '11-7536-8463',
    '11-3736-2346',
    '11-2346-2347',
    '11-2346-6462']),
  
  mail: sample([
    'chocolatelover@gmail.com',
    'adventureseeker@gmail.com',
    'musicfanatic@gmail.com',
    'beachbum@outlook.com',
    'bookworm@outlook.com',
    'sportsfan@outlook.com',
    'pizzaenthusiast@hotmail.com',
    'techgeek@hotmail.com',
    'travelbug@hotmail.com',
    'hikingspirit@yahoo.com',
  ]),

  horario: sample([
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '17:00',
    '14:00',
  ]),


  status: sample(['Aceptada', 'Finalizada', 'Cancelada']),
}));

export default users;
