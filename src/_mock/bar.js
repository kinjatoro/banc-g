import { sample } from 'lodash';

const bares = [...Array(23)].map((_, index) => ({
    id: index+1,
    cover: `/assets/images/covers/cover_${index + 1}.jpg`,
    email: 'cwaltz@uade.edu.ar',
    photoURL: '/assets/images/avatars/ID_20827.jpg',
  }));
  
  export default bares;