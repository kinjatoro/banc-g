import {Avatar,Box, Button, Card, CardActions, CardHeader, CardContent, Container, Divider, Stack, TextField, Typography, Unstable_Grid2 as Grid} from '@mui/material';
import { styled } from '@mui/material/styles';

import { useCallback, useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import jwtDecode from 'jwt-decode';
import { useMyBar } from '../TengoBarAuth';

import foto from '../logo.svg'
import {AccountProfileDetailsBar, AccountProfileBar} from '../sections/auth/login';



// ----------------------------------------------------------------------



const DATOS = {
  name: 'El rincón del vago',
  address: 'Santa Clara del Corazón 243',
  neighbourhood: 'Palermo',
  city: 'CABA',
  phone: '4296-2007',
  logo: '../logo.svg',
  banner: '/assets/images/avatars/ID_20827.jpg',
  description: 'esta es una descripcion'
};



export default function PerfilBar() {

function getJwtToken() {
  const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
  return jwtCookie ? jwtCookie.split('=')[1] : null;
}

const jwtToken = getJwtToken();
const decodedToken = jwtDecode(jwtToken);

const { myBar, setMyBar } = useMyBar();

const [name, setName] = useState();
const [username, setUsername] = useState(decodedToken.username);
const [email, setEmail] = useState(decodedToken.email);
const [address, setAddress] = useState();
const [neighbourhood, setNeighbourhood] = useState();
const [city, setCity] = useState();
const [phone, setPhone] = useState();
const [logo, setLogo] = useState(decodedToken.logo);
const [banner, setBanner] = useState();
const [description, setDescription] = useState();



const handleChange = (e) => {
  const { name, value } = e.target;
  const fieldFunctions = {
    name: setName,
    description: setDescription,
    phone: setPhone,
    address: setAddress,
    neighbourhood: setNeighbourhood,
    city: setCity,
  };

  const updateFunction = fieldFunctions[name];
  if (updateFunction) {
    updateFunction(value);
  }
};

const handleLogoChange = (e) => {
  const selectedFile = e.target.files[0];
  setLogo(selectedFile);
};

const handleBannerChange = (e) => {
  const selectedFile = e.target.files[0];
  setBanner(selectedFile);
};


  
  return (

  
    <>

      <Helmet>
        <title> Perfil Bar | For The Music Lovers </title>
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
        
                <Avatar
                src={`https://music-lovers-production.up.railway.app${decodedToken.logo}`}
                sx={{
                  height: 57,
                  mb: 2,
                  width: 57
                }}
              />
              
          
          <Typography
            gutterBottom
            variant="h5"
          >
          
                Los Polvorines
                
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {address}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {neighbourhood}
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
          Cambiar foto de perfil
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
          <img src={banner} alt="banner"/>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
          color='secondary'
        >
          Cambiar banner
        </Button>
      </CardActions>
    </Card>
    
    </>
              </Grid>
              
              
              <Grid
                xs={12}
                 md={6}
                lg={8}
              >
                <>
 
      <Card sx={{ml:3}}> 
        <CardHeader
          title="Tus datos"
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
                  name="name"
                  onChange={handleChange}
                  value={name}
                />
              </Grid>
              <Grid
                xs={12}
                
              >
                <TextField
                  fullWidth
                  label="Descripcion"
                  name="description"
                  onChange={handleChange}
                  required
                  value={description}
                  multiline
                  rows={3}
                />
              </Grid>

              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="username"
                  name="username"
                  onChange={handleChange}
                  
                  value={username}
                  disabled
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
                  
                  value={email}
                  disabled
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Número de teléfono"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Ciudad"
                  name="city"
                  onChange={handleChange}
                  required
                  value={city}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Barrio"
                  name="neighbourhood"
                  onChange={handleChange}
                  required

                  value={neighbourhood}
                />
                  
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Dirección"
                  name="address"
                  onChange={handleChange}
                  required
                  value={address}
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
