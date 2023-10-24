import {Avatar,Box, Button, Card, CardActions, CardHeader, CardContent, Container, Divider, Stack, TextField, Typography, Unstable_Grid2 as Grid} from '@mui/material';
import { styled } from '@mui/material/styles';

import { useCallback, useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui

import { useMyBar } from '../TengoBarAuth';


import {AccountProfileDetailsBar, AccountProfileBar} from '../sections/auth/login';

// ----------------------------------------------------------------------

const user = {
  avatar: '/assets/images/avatars/ID_20827.jpg',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Anika Visser',
  timezone: 'GTM-7'
};
const barrio = [
    {
      "value": "Capital Federal",
      "label": "CAPITAL FEDERAL"
    },
    {
      "value": "Adrogué",
      "label": "ADROGUÉ"
    },
    {
      "value": "Almagro",
      "label": "ALMAGRO"
    },
    {
      "value": "Avellaneda",
      "label": "AVELLANEDA"
    },
    {
      "value": "Belgrano",
      "label": "BELGRANO"
    },
    {
      "value": "Berazategui",
      "label": "BERAZATEGUI"
    },
    {
      "value": "Boedo",
      "label": "BOEDO"
    },
    {
      "value": "Caballito",
      "label": "CABALLITO"
    },
    {
      "value": "Florencio Varela",
      "label": "FLORENCIO VARELA"
    },
    {
      "value": "Flores",
      "label": "FLORES"
    },
    {
      "value": "Haedo",
      "label": "HAEDO"
    },
    {
      "value": "Ituzaingó",
      "label": "ITUZAINGÓ"
    },
    {
      "value": "La Boca",
      "label": "LA BOCA"
    },
    {
      "value": "Lanús",
      "label": "LANÚS"
    },
    {
      "value": "Lomas de Zamora",
      "label": "LOMAS DE ZAMORA"
    },
    {
      "value": "Mataderos",
      "label": "MATADEROS"
    },
    {
      "value": "Monte Grande",
      "label": "MONTE GRANDE"
    },
    {
      "value": "Morón",
      "label": "MORÓN"
    },
    {
      "value": "Olivos",
      "label": "OLIVOS"
    },
    {
      "value": "Palermo",
      "label": "PALERMO"
    },
    {
      "value": "Quilmes",
      "label": "QUILMES"
    },
    {
      "value": "Recoleta",
      "label": "RECOLETA"
    },
    {
      "value": "San Cristóbal",
      "label": "SAN CRISTÓBAL"
    },
    {
      "value": "San Fernando",
      "label": "SAN FERNANDO"
    },
    {
      "value": "San Isidro",
      "label": "SAN ISIDRO"
    },
    {
      "value": "San Justo",
      "label": "SAN JUSTO"
    },
    {
      "value": "San Telmo",
      "label": "SAN TELMO"
    },
    {
      "value": "Tigre",
      "label": "TIGRE"
    },
    {
      "value": "Vicente López",
      "label": "VICENTE LÓPEZ"
    },
    {
      "value": "Villa Devoto",
      "label": "VILLA DEVOTO"
    }
  
  
];

export default function PerfilBar() {
const { myBar, setMyBar } = useMyBar();
const [values, setValues] = useState({
  firstName: 'Anika',
  lastName: 'Visser',
  email: 'demo@devias.io',
  phone: '',
  state: 'los-angeles',
  country: 'USA'
});

const handleChange = useCallback(
  (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  },
  []
);

const handleSubmit = useCallback(
  (event) => {
    event.preventDefault();
  },
  []
);


  
  return (

  
    <>

      <Helmet>
        <title> Eventos | For The Music Lovers </title>
      </Helmet>

      <Container>
        <Stack spacing={3}>
          <div>
            <Typography variant="h3" sx={{mb:2, ml:3}}>
              Cuenta
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              
              <Grid
                xs={12}
                md={6}
                lg={4}
                
              >
                <>
    <Card sx={{mb:4,mr:3, ml:6}}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {!myBar ? (
                <><Avatar
                src={user.avatar}
                sx={{
                  height: 40,
                  mb: 2,
                  width: 40
                }}
              /></>
                ) : (
              <><Avatar
              src={'/assets/images/avatars/polvorines.jpg'}
              sx={{
                height: 40,
                mb: 2,
                width: 40
              }}
            /></>
             )}
          
          <Typography
            gutterBottom
            variant="h5"
          >
          {!myBar ? (
                <>Los Polvorines</>
                ) : (
              <>Los Polvorines</>
             )}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.city} {user.country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
          color='secondary'
        >
          Cambiar foto del Bar
        </Button>
      </CardActions>
    </Card></>
    <>
    <Card sx={{mb:4,mr:3, ml:6}}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {!myBar ? (
                <><Avatar
                src={user.avatar}
                sx={{
                  height: 40,
                  mb: 1,
                  width: 40
                }}
              /></>
                ) : (
              <><Avatar
              src={'/assets/images/avatars/polvorines.jpg'}
              sx={{
                height: 40,
                mb: 1,
                width: 40
              }}
            /></>
             )}
          
          <Typography
            gutterBottom
            variant="h5"
          >
          {!myBar ? (
                <>Los Polvorines</>
                ) : (
              <>Los Polvorines</>
             )}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.city} {user.country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
          color='secondary'
        >
          Cambiar foto del usuario
        </Button>
      </CardActions>
    </Card></>
              </Grid>
              
              <Grid
                xs={12}
                 md={6}
                lg={8}
              >
                <>
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card sx={{ml:3}}> 
        <CardHeader
          title="Perfil"
          sx={{py:2,ml:1}}
        />
        <CardContent sx={{ pt: 0, mx:2 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={12}
              >
                <TextField
                  fullWidth
                  label="Nombre del Bar"
                  name="nombre del Bar"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Tu nombre"
                  name="tu nombre"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Tu apellido"
                  name="tu apellido"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Número de teléfono"
                  name="número de teléfono"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Ciudad"
                  name="ciudad"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Barrio"
                  name="barrio"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.barrio}
                >
                  {barrio.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Dirección"
                  name="dirección"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              
              </Grid>
              
            </Grid>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button  color='primary' sx={{mx:3,mb:1,mt:-2}} variant="contained">
            Guardar cambios
          </Button>
        </CardActions>
      </Card>
    </form>
    </>
                {/* <AccountProfileDetailsBar /> */}
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>

     
    </>
  );
}
