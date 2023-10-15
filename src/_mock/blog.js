import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const CLASES = [
  'Litto Nebia','Fex Brothers','Jackson Graham','Nico Petucci','Los Hermanos Trebuq','Kepelo Tagerson','Tributo Beatles','Quinn',
    'Tomi Ferguson','Max Trace','Dominiq Carlson'
];



const NOMBRES =[
  'Ezequiel', 'Neistadt', 'Agustín', 'Carlos', 'Manuel', 'José', 'Joaquín', 'Roberto', 'Gomez', 'Lopez', 'Perez', 'Díaz',
  'Luis', 'María', 'Fredes',
  'Lucas', 'Muras',
  'Juan Ignacio', 'Boiko',
  'Esteban', 'Loza',
  'Ignacio', 'Prados',
  'Federico', 'Solanes',
  'Nicolás', 'Parilla',
  'Santiago', 'Carrasco', 'Vera',
  'Macareno', 'Iacob', 'Meltor',
];

const DURACION = sample([])

const posts = [...Array(23)].map((_, index) => ({
  id: index+1,
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: sample(['Litto Nebia','Fex Brothers','Jackson Graham','Nico Petucci','Los Hermanos Trebuq','Quepe Lotagerson','Tributo Beatles','Quinn',
  'Tomi Ferguson','Max Trace','Dominiq Carlson']),
  createdAt: faker.date.past(),
  view: sample(["19/11/2023", "12/11/2023", "13/11/2023", "20/11/2023", "22/11/2023", "23/11/2023", "02/12/2023","04/12/2023","07/12/2023","01/01/2024"]),
  stars: sample(["4.1","4.2","4.3","4.4","4.5","4.6","4.7","4.8","4.9","4.0","3.9"]),
  price: sample([
    '$20',
    '$50',
    '$75',
    '$100',
    '$150',
    '$200',
    '$250',
    '$300',
    '$350',
    '$400',
    '$450',
    '$500',
    '$550',
    '$600',
    '$650',
    '$700',
    '$750',
    '$800',
    '$850',
  ]),
  share: sample(["20:00", "20:30","21:00", "21:30", "22:00","22:30", "23:00"]),
  favorite: faker.datatype.number(),
  author: {
    name: sample([
      "El Rincón Bohemio",
  "La Taberna del Marinero",
  "El Búho Nocturno",
  "El Jardín Secreto",
  "Bar La Luna Creciente",
  "El Escondite del Jazz",
  "El Refugio de los Amigos",
  "Taberna del Dragón Rojo",
  ]),
  
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
