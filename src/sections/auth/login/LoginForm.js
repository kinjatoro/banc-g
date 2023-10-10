import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import jwtDecode from 'jwt-decode';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, Container, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../../../components/iconify';

import { useAuth } from '../../../Auth'


// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { auth, setAuth } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    navigate('/dashboard');
    setAuth(true);
  };

  const handleClick2 = () => {
    navigate('/recupero');
  }


  const handleLogin = async () => {
    try {
      const response = await axios.post('https://music-lovers-production.up.railway.app/business/login/', {
        email: 'test@mail.com',
        password: 'test',
      });

      // Crea el token
      const token = response.data.access;

      console.log(token);

      // Lo almacena en una cookie
      document.cookie = `jwtToken=${token}; path=/; SameSite=Strict;`;

      // Reinicia los valores de mail y contraseña
      setEmail('');
      setPassword('');
      
    } catch (error) {
      console.error('Error de inicio de sesión', error);
    }


  };

    // extrae el token de la cookie
    function getJwtToken() {
      const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
      return jwtCookie ? jwtCookie.split('=')[1] : null;
    }

    
    

    const handleDecode = async () => {
    const jwtToken = getJwtToken();

    // decodifica el token (si lo encuentra)
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);
      console.log(decodedToken);
    } else {
      console.error('No se encontró un token JWT en la cookie');
    }

    }

    

  return (
    <>
      <Stack spacing={3}>
        <TextField name="correo"
           label="Correo electrónico"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />

        <TextField
          name="Contraseña"
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleLogin}>
        Iniciar Sesión
      </LoadingButton>

      <Button onClick={handleDecode}>PRUEBA</Button>


      
    </>
  );
}
