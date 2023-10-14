import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';

import { ProductSort} from '../sections/@dashboard/products';

// components
import Iconify from '../components/iconify';

import { BlogPostCard, BlogPostsSort, BlogPostsSearch,ProductFilterSidebar } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

export default function BlogPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
 
  const filteredBlog = POSTS.filter((card) =>
  card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  


  
  return (

  
    <>
      <Helmet>
        <title> Eventos | For The Music Lovers </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h3" gutterBottom>
            Eventos
          </Typography>
          
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
              <input
              type="text"
              placeholder="Buscar por título..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                width: '300px',
                height: '55px', 
                fontSize: '16px',
                borderRadius: '10px', // Cambia el redondeo de las esquinas
                border: '2px solid #f0f0f0',
                paddingLeft: "10px",
                backgroundColor: '#F9FAFB'
              }}
            />
              
            <Box sx={{textAlign: "right"}}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
            </Box>

        </Stack>

        <Grid container spacing={3}>
          {filteredBlog.map((post, index) => (
            <BlogPostCard post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
