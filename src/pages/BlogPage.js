import { useState,useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container,  Menu, MenuItem,  Box,
  Stack,

  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel} from '@mui/material';


  import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Scrollbar from '../components/scrollbar';

import { ProductSort} from '../sections/@dashboard/products';

// components
import Iconify from '../components/iconify';

import { BlogPostCard, BlogPostsSort, BlogPostsSearch,ProductFilterSidebar } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';



import { useAuth } from '../Auth'
import { useMyBar } from '../TengoBarAuth'

// ----------------------------------------------------------------------

export const FILTER_CATEGORIA_OPTIONS = ['Matemática', 'Música', 'Química', 'Historia', 'Geografía', 'Inglés', 'Programación' ];
export const FILTER_TIPOCLASE_OPTIONS = ['Individual', 'Grupal'];
export const FILTER_RATING_OPTIONS = ['up5Star', 'up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_FRECUENCIA_OPTIONS = ['Única', 'Semanal', 'Mensual'];




export default function BlogPage() {


  const [EVENTOS, setEVENTOS] = useState([]);

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = async () => {
    console.log(1)
    try {
      const response = await axios.get('https://music-lovers-production.up.railway.app/business/events/get/');
      console.log(2)
      const aux = response.data;
      setEVENTOS(aux);
      setFilteredBlog(aux);
      console.log(aux)


    } catch (error) {
      console.error('Ocurrió un error al intentar cargar los eventos', error);
    }

  };











  const [openFilter, setOpenFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlog, setFilteredBlog] = useState(EVENTOS);

  
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
    const filtered = EVENTOS.filter((card) =>
      card.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBlog(filtered); // Actualiza el estado con el resultado de la búsqueda
  };

  const handleMayorPrecio = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return priceB - priceA;
    });
    setFilteredBlog(sortedBlog); // Actualiza el estado con el nuevo orden
    setOpen(null);
    setOrden('Mayor Precio');
  };

  const handleMenorPrecio = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return  priceA - priceB;
    });
    setFilteredBlog(sortedBlog); // Actualiza el estado con el nuevo orden
    setOpen(null);
    setOrden('Menor Precio');
  };

  const handleProximamente = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const dateA = new Date(a.datetime).getTime();
      const dateB = new Date(b.datetime).getTime();
      return dateA - dateB;
    });
  
    setFilteredBlog(sortedBlog);
    setOpen(null);
    setOrden('Proximamente');
  };
  

  const handleDestacado = () => {
    setFilteredBlog(EVENTOS);
    setOpen(null);
    setOrden('Destacado');
  };

  const handleGenero = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const generoA = a.genre; // Asegúrate de usar la propiedad correcta que almacena el género de las publicaciones
      const generoB = b.genre; // Asegúrate de usar la propiedad correcta que almacena el género de las publicaciones
  
      // Realiza la comparación de género. Puedes usar una lógica personalizada o comparar cadenas de texto.
      // Por ejemplo, ordenar alfabéticamente las cadenas de texto de género.
      return generoA.localeCompare(generoB);
    });
  
    setFilteredBlog(sortedBlog); // Actualiza el estado con el nuevo orden
    setOpen(null);
    setOrden('Género'); // Establece la etiqueta del orden
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
            <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={handleOpenFilter}>
                Filtrar&nbsp;
             </Button>



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


                    <MenuItem
                      key={"genero"}
                      selected={"genero" === 'newest'}
                      onClick={handleGenero}
                      sx={{ typography: 'body2' }}
                    >
                      {"Género"}
                    </MenuItem>


                </Menu>





            </Box>

        </Stack>

        <Grid container spacing={3}>
          {filteredBlog.map((evento, index) => (
            <BlogPostCard post={evento} index={index} />
          ))}
        </Grid>
      </Container>













































      <Drawer
        anchor="right"
        open={openFilter}
        onClose={handleCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
        
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filtrar
          </Typography>
          <IconButton onClick={handleCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div> 
             
                
              <Typography variant="subtitle1" gutterBottom >
                Categoría
              </Typography>
             
              <FormGroup>
                {FILTER_CATEGORIA_OPTIONS.map((item) => (
                  <FormControlLabel key={item} control={<Checkbox />} label={item} />
                ))}
              </FormGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Tipo de Clase
              </Typography>
              <RadioGroup>
                {FILTER_TIPOCLASE_OPTIONS.map((item) => (
                  <FormControlLabel key={item} value={item} control={<Checkbox />} label={item} />
                ))}
              </RadioGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Frecuencia
              </Typography>
              <RadioGroup>                {FILTER_FRECUENCIA_OPTIONS.map((item) => (
                  <FormControlLabel key={item} value={item} control={<Checkbox />} label={item} />
                ))}
              </RadioGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Calificación
              </Typography>
              <RadioGroup>
                
                <Rating/>
                
              </RadioGroup>
            </div>
          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"

            variant="contained"
            startIcon={<Iconify icon="ic:round-clear-all" />}
          >
            Buscar
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
