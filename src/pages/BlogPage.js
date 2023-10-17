import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Box, Menu, MenuItem } from '@mui/material';

import jwtDecode from 'jwt-decode';

import { ProductSort} from '../sections/@dashboard/products';

// components
import Iconify from '../components/iconify';

import { BlogPostCard, BlogPostsSort, BlogPostsSearch,ProductFilterSidebar } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';



import { useAuth } from '../Auth'
import { useMyBar } from '../TengoBarAuth'

// ----------------------------------------------------------------------



export default function BlogPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlog, setFilteredBlog] = useState(POSTS);

  
  const [open, setOpen] = useState(null);

  const [orden, setOrden] = useState('Destacado');

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Filtra las cartas en función de la búsqueda y orden actual
    const filtered = POSTS.filter((card) =>
      card.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBlog(filtered); // Actualiza el estado con el resultado de la búsqueda
  };

  const handleMayorPrecio = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return priceB - priceA;
    });
    setFilteredBlog(sortedBlog); // Actualiza el estado con el nuevo orden
    setOpen(null);
    setOrden('Mayor Precio');
  };

  const handleMenorPrecio = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return  priceA - priceB;
    });
    setFilteredBlog(sortedBlog); // Actualiza el estado con el nuevo orden
    setOpen(null);
    setOrden('Menor Precio');
  };

  const handleProximamente = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const [dayA, monthA, yearA] = a.view.split('/').map(Number);
      const [dayB, monthB, yearB] = b.view.split('/').map(Number);
  
      if (yearA === yearB) {
        if (monthA === monthB) {
          return dayA - dayB; // Si los años y los meses son iguales, ordena por día
        }
        return monthA - monthB; // Si los años son iguales, ordena por mes
      }
  
      return yearA - yearB; // Si los años son diferentes, ordena por año
    });
    setFilteredBlog(sortedBlog);
    setOpen(null);
    setOrden('Proximamente');
  };

  const handleDestacado = () => {
    setFilteredBlog(POSTS);
    setOpen(null);
    setOrden('Destacado');
  };
  
  
  









  
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



                <Button
                  color="inherit"
                  disableRipple
                  onClick={handleOpen}
                  endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
                >
                  Ordenar Por:&nbsp;
                  <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary', ml:0.5 }}>
                    {orden}
                  </Typography>
                </Button>
                <Menu
                  keepMounted
                  anchorEl={open}
                  open={Boolean(open)}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  
                    <MenuItem
                      key={"destacado"}
                      selected={"destacado" === 'newest'}
                      onClick={handleDestacado}
                      sx={{ typography: 'body2' }}
                    >
                      {"Destacado"}
                    </MenuItem>
                  
                    <MenuItem
                      key={"proximamente"}
                      selected={"nuevo" === 'newest'}
                      onClick={handleProximamente}
                      sx={{ typography: 'body2' }}
                    >
                      {"Próximamente"}
                    </MenuItem>


                    <MenuItem
                      key={"mayor precio"}
                      selected={"mayor precio" === 'newest'}
                      onClick={handleMayorPrecio}
                      sx={{ typography: 'body2' }}
                    >
                      {"Mayor precio"}
                    </MenuItem>


                    <MenuItem
                      key={"menor precio"}
                      selected={"menor precio" === 'newest'}
                      onClick={handleMenorPrecio}
                      sx={{ typography: 'body2' }}
                    >
                      {"Menor precio"}
                    </MenuItem>


                </Menu>





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
