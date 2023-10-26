import {Avatar,Box, Button, Card, MenuItem,FormControl,InputLabel,Select, CardActions, CardHeader, CardContent, Container, Divider, Stack, TextField, Typography, Unstable_Grid2 as Grid} from '@mui/material';
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



export default function PerfilUsuario() {

function getJwtToken() {
  const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
  return jwtCookie ? jwtCookie.split('=')[1] : null;
}

const jwtToken = getJwtToken();
const decodedToken = jwtDecode(jwtToken);

const { myBar, setMyBar } = useMyBar();

const [username, setUsername] = useState(decodedToken.username);
const [email, setEmail] = useState(decodedToken.email);
const [logo, setLogo] = useState();

const handleLogoChange = (e) => {
  const selectedFile = e.target.files[0];
  setLogo(selectedFile);
};

  
  return (

  
    <>

      <Helmet>
        <title> Perfil Usuario | For The Music Lovers </title>
      </Helmet>

      <Container>
        <Stack spacing={3}>
          <div>
            <Typography variant="h3" sx={{mb:2, ml:6}}>
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
    <Card sx={{mb:1,mr:3, ml:6}}>
      <CardContent sx={{mb:-2}}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
        
                <Avatar
                src={logo ? URL.createObjectURL(logo) : foto}
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
          
                {username}
                
          </Typography>

        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                

      <label htmlFor="fileInput" >
              <input
              type="file"
              accept="image/*" // Puedes especificar el tipo de archivo que esperas aquí
              style={{ display: 'none' }}
              onChange={handleLogoChange}
              id="fileInput"
            />
        <Button
          fullWidth
          variant="text"
          color='secondary'
          component="span"
        >
          Cambiar foto de perfil
        </Button></label>




      </CardActions>
    </Card></>
    <>

    
    
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
                md={6}
              >
                <TextField
                  fullWidth
                  label="Nombre de usuario"
                  name="username"
                  
                  
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
                  
                  
                  value={email}
                  disabled
                />
              </Grid>


              <Grid
                xs={12}
                md={6}
              >
              <FormControl fullWidth>
                  <InputLabel id="genre">Género 1</InputLabel>
                  <Select
                    labelId="genre"
                    id="genre"
                    label="Género 1"
                    MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}

                  >
                    <MenuItem value="Rock">Rock</MenuItem>
                    <MenuItem value="Pop">Pop</MenuItem>
                    <MenuItem value="Electronica">Electronica</MenuItem>
                    <MenuItem value="Hiphop">Hiphop</MenuItem>
                    <MenuItem value="Reggae">Reggae</MenuItem>
                    <MenuItem value="Reggaeton">Reggaeton</MenuItem>
                    <MenuItem value="Cumbia">Cumbia</MenuItem>
                    <MenuItem value="Salsa">Salsa</MenuItem>
                    <MenuItem value="Tango">Tango</MenuItem>
                    <MenuItem value="Folklore">Folklore</MenuItem>
                    <MenuItem value="Jazz">Jazz</MenuItem>
                    <MenuItem value="Blues">Blues</MenuItem>
                    <MenuItem value="Otro">Otro</MenuItem>
                    
                  </Select>
                </FormControl>
              
              </Grid>

              <Grid
                xs={12}
                md={6}
              >
              <FormControl fullWidth>
                  <InputLabel id="genre">Género 2</InputLabel>
                  <Select
                    labelId="genre"
                    id="genre"
                    label="Género 2"
                    MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}

                  >
                    <MenuItem value="Rock">Rock</MenuItem>
                    <MenuItem value="Pop">Pop</MenuItem>
                    <MenuItem value="Electronica">Electronica</MenuItem>
                    <MenuItem value="Hiphop">Hiphop</MenuItem>
                    <MenuItem value="Reggae">Reggae</MenuItem>
                    <MenuItem value="Reggaeton">Reggaeton</MenuItem>
                    <MenuItem value="Cumbia">Cumbia</MenuItem>
                    <MenuItem value="Salsa">Salsa</MenuItem>
                    <MenuItem value="Tango">Tango</MenuItem>
                    <MenuItem value="Folklore">Folklore</MenuItem>
                    <MenuItem value="Jazz">Jazz</MenuItem>
                    <MenuItem value="Blues">Blues</MenuItem>
                    <MenuItem value="Otro">Otro</MenuItem>
                    
                  </Select>
                </FormControl>
              
              </Grid>

              <Grid
                xs={12}
                md={6}
              >
              <FormControl fullWidth>
                  <InputLabel id="genre">Género 3</InputLabel>
                  <Select
                    labelId="genre"
                    id="genre"
                    label="Género 3"
                    MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}

                  >
                    <MenuItem value="Rock">Rock</MenuItem>
                    <MenuItem value="Pop">Pop</MenuItem>
                    <MenuItem value="Electronica">Electronica</MenuItem>
                    <MenuItem value="Hiphop">Hiphop</MenuItem>
                    <MenuItem value="Reggae">Reggae</MenuItem>
                    <MenuItem value="Reggaeton">Reggaeton</MenuItem>
                    <MenuItem value="Cumbia">Cumbia</MenuItem>
                    <MenuItem value="Salsa">Salsa</MenuItem>
                    <MenuItem value="Tango">Tango</MenuItem>
                    <MenuItem value="Folklore">Folklore</MenuItem>
                    <MenuItem value="Jazz">Jazz</MenuItem>
                    <MenuItem value="Blues">Blues</MenuItem>
                    <MenuItem value="Otro">Otro</MenuItem>
                    
                  </Select>
                </FormControl>
              
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
