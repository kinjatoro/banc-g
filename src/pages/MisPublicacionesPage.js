import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect  } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import axios from 'axios';
import jwtDecode from 'jwt-decode';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,Modal,Box,Grid,TextField,Divider,FormControl,InputLabel, Select, 
} from '@mui/material';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'servicio', label: 'Evento', alignRight: false },
  { id: 'duracion', label: 'Fecha', alignRight: false },
  { id: 'frecuencia', label: 'Hora', alignRight: false },
  { id: 'costo', label: 'Precio', alignRight: false },
  { id: 'genero', label: 'Genero', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function UserPage() {

      console.log(1);
    /* -------------------------COOKIES ---------------------------------*/

        const [EVENTOS, setEVENTOS] = useState([]);
    
        useEffect(() => {
           handleLogin();
        }, []);


        console.log(2);

        function getJwtToken() {
          const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
          console.log(3);
          return jwtCookie ? jwtCookie.split('=')[1] : null;
        }

        console.log(4);
        const cookieValue = getJwtToken();
        console.log(5);

        const handleLogin = async () => {

          console.log(6);
          const config = {
            headers: {
              'Authorization': `Bearer ${cookieValue}`,
            },
          }
          console.log(7);
          ;


          try {
            const response = await axios.get('https://music-lovers-production.up.railway.app/business/events/', config);
      
            console.log("FUNCIONÓ (CREO)")
            // Crea el token
            const aux = response.data;
            setEVENTOS(aux);

      
            
          } catch (error) {
            console.error('Error de inicio de sesión', error);
          }
      
    };


    
     /* -------------------------COOKIES ---------------------------------*/





     

     EVENTOS.map((item) => {
       console.log(item.title);
       return null; // El valor de retorno no es importante en este caso
     });





  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleOpenMenu = (event, id) => {
    setOpen(event.currentTarget);
    // Puedes usar el 'id' u otros datos específicos de la fila aquí.
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = EVENTOS.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate('/dashboard/crearservicio');
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - EVENTOS.length) : 0;

  const filteredUsers = applySortFilter(EVENTOS, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const [openModal, setOpenModal] = useState(false);

  const handlePublicarServicio = () => {
    setOpenModal(true);
  };
const handleCloseModal= () => {
    setOpenModal(false);
  };

  

  return (
    <>
      <Helmet>
        <title> Mis Publicaciones | For The Music Lovers </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Mis Publicaciones
          </Typography>
          <Button variant="contained" onClick={handlePublicarServicio} startIcon={<Iconify icon="eva:plus-fill" />}>
            Nueva publicación 
          </Button>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={EVENTOS.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {EVENTOS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, title, datetime, frecuencia, price, genre } = row;
                    const selectedUser = selected.indexOf(title) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} selected={selectedUser}>
                        <TableCell padding="checkbox">
                        <bullet/>
                        </TableCell>
                        
                        

                        <TableCell align="left">{title}</TableCell>
                        <TableCell align="left">{datetime.slice(0,10)}</TableCell>
                        <TableCell align="left">{datetime.slice(11,16)}</TableCell>
                        <TableCell align="left">{price}</TableCell>

                        <TableCell align="left">{genre}</TableCell>

                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={(event) => handleOpenMenu(event, id)}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>

                        

                      </TableRow>


                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                          No encontrado
                          </Typography>

                          <Typography variant="body2">
                          No se encontraron resultados para &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Prueba escribiendo otra palabra.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={EVENTOS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >

        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Editar
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Eliminar
        </MenuItem>
        
      </Popover>
          

     
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="sm" sx={{mt: 4, padding: '20px', maxHeight: '675px', backgroundColor: 'white', borderRadius: 5}}>
        
        <Box mt={1} mb={2} backgroundColor='white' align='center'>
            <Typography variant="h4" gutterBottom>

                <strong>Publicar Evento</strong> 
              </Typography>
        </Box>
        
        <Box sx={{mt:2}} backgroundColor='white'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              size="small"
                variant="outlined"
                label="Título del evento"
                fullWidth
                multiline
                rows={1}
              />
            </Grid>
          </Grid>
        </Box>
        
        <Box mt={2} backgroundColor='white'>
        
        <Grid item xs={12}>
              <TextField
                size="small"
                variant="outlined"
                label="Descripción"
                fullWidth
                multiline
                rows={2}
              />
            </Grid>
        </Box>
        

        <Box mt={2} backgroundColor='white' > 
        <Grid container spacing={2}>
        <Grid item xs={4}>
           <FormControl fullWidth>
        <InputLabel id="Día">Dia</InputLabel>
        <Select
          labelId="Día"
          id="Dia"
          label="Día"
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}

        >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="6">6</MenuItem>
        <MenuItem value="7">7</MenuItem>
        <MenuItem value="8">8</MenuItem>
        <MenuItem value="9">9</MenuItem>
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="11">11</MenuItem>
        <MenuItem value="12">12</MenuItem>
        <MenuItem value="13">13</MenuItem>
        <MenuItem value="14">14</MenuItem>
        <MenuItem value="15">15</MenuItem>
        <MenuItem value="16">16</MenuItem>
        <MenuItem value="17">17</MenuItem>
        <MenuItem value="18">18</MenuItem>
        <MenuItem value="19">19</MenuItem>
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="21">21</MenuItem>
        <MenuItem value="22">22</MenuItem>
        <MenuItem value="23">23</MenuItem>
        <MenuItem value="24">24</MenuItem>
        <MenuItem value="25">25</MenuItem>
        <MenuItem value="26">26</MenuItem>
        <MenuItem value="27">27</MenuItem>
        <MenuItem value="28">28</MenuItem>
        <MenuItem value="29">29</MenuItem>
        <MenuItem value="30">30</MenuItem>
        <MenuItem value="31">31</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      
      <Grid item xs={4}>
        <FormControl fullWidth>
        <InputLabel id="Mes">Mes</InputLabel>
        <Select
          labelId="Mes"
          id="Mes"
          label="Mes"
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}

        >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="6">6</MenuItem>
        <MenuItem value="7">7</MenuItem>
        <MenuItem value="8">8</MenuItem>
        <MenuItem value="9">9</MenuItem>
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="11">11</MenuItem>
        <MenuItem value="12">12</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth>
        <InputLabel id="Año">Año</InputLabel>
        <Select
          labelId="Año"
          id="Año"
          label="Año"
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}

        >
        <MenuItem value="2023">2023</MenuItem>
        <MenuItem value="2024">2024</MenuItem>
        <MenuItem value="2025">2025</MenuItem>
        <MenuItem value="2026">2026</MenuItem>
        <MenuItem value="2027">2027</MenuItem>
        <MenuItem value="2028">2028</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      </Box> 
      
      
      
      

        <Box mt={2} backgroundColor='white'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                size="small"
                variant="outlined"
                label="Hora"
                fullWidth
                multiline
                rows={1}
              />
            </Grid>
          </Grid>
        </Box>


        <Box mt={2} backgroundColor='white'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              size="small"
                variant="outlined"
                label="Costo"
                fullWidth
                multiline
                rows={1}
              />
            </Grid>
          </Grid>
        </Box>


        <Box mt={2} backgroundColor='white'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              size="small"
                variant="outlined"
                label="Género"
                fullWidth
                multiline
                rows={1}
              />
            </Grid>
          </Grid>
        </Box>



        <Box my={2} align="center" backgroundColor='white'>

            <Button
                variant="outlined"
                color="primary"
                startIcon={<Iconify icon="eva:cloud-upload-outline" />}
              >
                Subir foto
              </Button>
        </Box>
        <Box my={2}>
        <Divider />
        </Box>
        <Box backgroundColor='white'>
            <Grid align="center">
             <Button variant="contained" size="large"
                // variant="contained"
                color="primary"
                startIcon={<Iconify icon="ic:baseline-plus" />}
              >
                Publicar Servicio
              </Button>
            </Grid>
        </Box>
    </Container>
      </Modal>







      </>
   
  );
}
