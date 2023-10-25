import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox,
         Typography, Container, Avatar, Card,CardActionArea,CardMedia, CardContent, CardActions,
         Box,Divider,Button, Grid,CardHeader, MenuItem,FormControl,InputLabel,Select } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useAuth } from '../../../Auth'

// components
import Iconify from '../../../components/iconify';

import foto from '../../../logo.svg'


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
export default function OnBoardingBarForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    navigate('/dashboard/mispublicaciones', { replace: true });
    setAuth(true);
  };


  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [neighbourhood, setNeighbourhood] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();
  const [logo, setLogo] = useState();
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
      <Stack spacing={1}>
      

    
    
  <Card sx={{ ml: 3 }}>
  <CardHeader   />
  <CardContent sx={{ mx: 2 }}>
    <Box sx={{ "& > *": { mb: 2 } }}>
      <Grid xs={12} md={12}>
        <TextField
          fullWidth
          label="Nombre del Bar"
          name="name"
          onChange={handleChange}
          value={name}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          label="Descripcion"
          name="description"
          onChange={handleChange}
       
          value={description}
          multiline
          rows={3}
        />
      </Grid>
     
      
      <Grid xs={12} md={6}>
        <TextField
          fullWidth
          label="Número de teléfono"
          name="phone"
          onChange={handleChange}
          type="number"
          value={phone}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          fullWidth
          label="Ciudad"
          name="city"
          onChange={handleChange}

          value={city}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          fullWidth
          label="Barrio"
          name="neighbourhood"
          onChange={handleChange}

          value={neighbourhood}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TextField
          fullWidth
          label="Dirección"
          name="address"
          onChange={handleChange}

          value={address}
        />
      </Grid>
    </Box>
  </CardContent>
</Card>
         

      





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
              src={'/assets/images/avatars/polvorines.jpg'}
              sx={{
                height: 40,
                mb: 1,
                width: 40
              }}
              style={{ width: 80, height: 80 }}
            />
           
          
          <Typography
            gutterBottom
            variant="h5"
          >
          
                Los Polvorines
          
     
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
          Subir foto del bar
        </Button>
      </CardActions>
    </Card>






















    <Card sx={{mb:4,mr:3, ml:6}}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
            
          }}
        >
   
              <img src={'/assets/images/avatars/polvorines.jpg'} alt='sad' style={{ 
  width: "200px",
  height: "200px", /* Alto deseado */
  objectFit: "cover", /* Recorta la imagen para que llene el contenedor */
  objectPosition: "center", /* Mantiene el centro de la imagen visible */
  borderRadius: "20%",
}
 }/>

              
            
           
          
        
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
          color='secondary'
        >
          Subir Banner
        </Button>
      </CardActions>
    </Card>

    
      </Stack>

              





      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} sx={{mt:3}}>
        Completar registro
      </LoadingButton>
    </>
  );
}
