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

import {BarPostCardInd} from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/bar';
import COMENTARIOS from '../_mock/comentarios';

import {AppNewsUpdate} from '../sections/@dashboard/app';



// ----------------------------------------------------------------------

export default function BarPage() {
  const [openFilter, setOpenFilter] = useState(false);

  

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };



  const { idBar } = useParams();
  const index = parseInt(idBar, 10); 
  const post = POSTS[index-1];
  
  return (

  
    <>
      <Helmet>
        <title> {post.title} </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} mt={-4}>
          <Typography variant="h3" gutterBottom>
          {post.title}
          </Typography>
          
        </Stack>

        <Grid container spacing={3}>
        
            <BarPostCardInd key={post.id} post={post} index={index} />
            
        </Grid>
        <Grid item xs={12} md={6} lg={8} >
            <AppNewsUpdate
              sx={{borderRadius: "0px"}}
              title="Agregar comentario"
              list={COMENTARIOS}
            />
          </Grid>
      </Container>


    </>
  );
}
