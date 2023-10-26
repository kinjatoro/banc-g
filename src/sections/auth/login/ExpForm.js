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

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    navigate('/dashboard/blog', { replace: true });
    setAuth(true);
  };

  return (
    <>
      <Stack spacing={1}>
      
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
          <Typography
            color="text.secondary"
            variant="body2"
          >
            HOLA
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
    </Card>
    


    <Card sx={{ml:3}}> 
        <CardHeader
          title="Preferencias musicales"
          sx={{ml:2}}
        />
        <CardContent sx={{ mx:2 }}>
          <Box sx={{ }}>

           
           <FormControl fullWidth sx={{ mb:2 }}>
                  <InputLabel id="genre">Género 1</InputLabel>
                  <Select
                    labelId="genre"
                    id="genre"
                    label="Género 1"
                    MenuProps={{ PaperProps: { sx: { maxHeight: 200} } }}

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
              

                <FormControl fullWidth sx={{ mb:2 }}>
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
            
          </Box>
        </CardContent>

      </Card>          









    
      </Stack>

              





      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} sx={{mt:3}}>
        Registrarme
      </LoadingButton>
    </>
  );
}
