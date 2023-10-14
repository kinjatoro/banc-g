import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { sample } from 'lodash';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Box,Divider } from '@mui/material';

import { ProductSort} from '../sections/@dashboard/products';

// components
import Iconify from '../components/iconify';

import {BarPostCardInd,BlogPostCard} from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/bar';
import BLOGS from '../_mock/blog';
import COMENTARIOS from '../_mock/comentarios';

import {AppNewsUpdateBar} from '../sections/@dashboard/app';



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

  const filteredBlogs = BLOGS.filter((card) => 
  card.author.name === post.title);


  console.log('filteredBlogs:', filteredBlogs);
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
            <AppNewsUpdateBar
              sx={{borderRadius: "0px"}}
              title="Agregar un comentario sobre el bar"
              list={COMENTARIOS}
            />
          </Grid>
          <Divider/>
          <Grid container spacing={3} sx={{mt:3}}>
          {filteredBlogs.map((post, index) => (
            <BlogPostCard post={post} index={index} />
          ))}
        </Grid>

      </Container>


    </>
  );
}
