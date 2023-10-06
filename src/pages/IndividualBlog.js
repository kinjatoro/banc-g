import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { sample } from 'lodash';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';

import { ProductSort} from '../sections/@dashboard/products';

// components
import Iconify from '../components/iconify';

import {BlogPostCardInd} from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

import {AppNewsUpdate} from '../sections/@dashboard/app';



// ----------------------------------------------------------------------

export default function BlogPage() {
  const [openFilter, setOpenFilter] = useState(false);

  

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };



  const { idBlog } = useParams();
  const index = parseInt(idBlog, 10); 
  const post = POSTS[index-1];
  
  return (

  
    <>
      <Helmet>
        <title> {post.title} </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h3" gutterBottom>
          {post.title}
          </Typography>
          
        </Stack>

        <Grid container spacing={3}>
        
            <BlogPostCardInd key={post.id} post={post} index={index} />
            
        </Grid>
        <Grid item xs={12} md={6} lg={8} >
            <AppNewsUpdate
              sx={{borderRadius: "0px"}}
              title="Agregar comentario"
              list={[...Array(5)].map((_, index) => ({
                id: index,
                title: sample([ 'Ezequiel', 'Neistadt', 'Agustín', 'Carlos', 'Manuel', 'Juan','Esteban','Lucas','Fernando','Nicolás']),
                description: sample([
                  'No puedo expresar lo agradecido que estoy por el apoyo que he recibido de este servicio de clases particulares. Mi profesor ha demostrado una paciencia infinita al explicar conceptos difíciles y me ha dado la confianza necesaria para enfrentar mis exámenes con éxito. Las lecciones son personalizadas y adaptadas a mis necesidades específicas, lo cual ha marcado la diferencia en mi aprendizaje.',
                  'Recomiendo este servicio a cualquiera que quiera aprender rápido.',
                  'tipazo',
                  'Primer comentario',
                  'Segundo comentario!',
                  'recomienzo 100%',
                  'fue una experiencia fantástica. Explicó los conceptos de manera clara y siempre estuvo dispuesto a responder mis preguntas. Mi comprensión de las matemáticas mejoró significativamente gracias a él.',
                  'Like si lo ves en 2023',
                  'Si bien el profe tiene un profundo conocimiento de la historia, a veces las clases pueden volverse un poco demasiado densas. Sería útil si se proporcionaran resúmenes de las lecciones después de cada clase para ayudar en la retención de información.',
                ]),
                image:  `/assets/images/avatars/avatar_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
      </Container>


    </>
  );
}
