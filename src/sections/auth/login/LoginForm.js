import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import jwtDecode from 'jwt-decode';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../../../components/iconify';

import { useAuth } from '../../../Auth'


// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    navigate('/dashboard');
    setAuth(true);
  };

  const handleClick2 = () => {
    navigate('/recupero');
  }


  const handleLogin = async () => {
    try {
      const response = await axios.post('https://ejemplo.com/api/login', {
        username: 'nombre_de_usuario',
        password: 'contraseña',
      });

      // Crea el token
      const token = response.data.token;

      // Lo almacena en una cookie
      document.cookie = `jwtToken=${token}; path=/; secure; HttpOnly; SameSite=Strict;`;
      
    } catch (error) {
      console.error('Error de inicio de sesión', error);
    }
  };

    // extrae el token de la cookie
    function getJwtToken() {
      const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
      return jwtCookie ? jwtCookie.split('=')[1] : null;
    }

    const jwtToken = getJwtToken();

    // decodifica el token (si lo encuentra)
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);
      console.log(decodedToken);
    } else {
      console.error('No se encontró un token JWT en la cookie');
    }

  return (
    <>
      <Stack spacing={3}>
        <TextField name="correo" label="Correo electrónico" />

        <TextField
          name="Contraseña"
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2}}>
        
        <Checkbox name="remember" label="Remember me" /> 
        <Typography variant="subtitle2">
        Recordar mi usuario y contraseña</Typography>
        <Link variant="subtitle2" underline="hover" sx={{pl: 4, cursor: 'pointer',textAlign: "right"}} onClick={handleClick2}>
          ¿Olvidaste tu contraseña? 
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Iniciar Sesión
      </LoadingButton>


      
    </>
  );
}
