import { useState } from 'react';

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
      </Container>
    </>
  );
}
