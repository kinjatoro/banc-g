import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import jwtDecode from 'jwt-decode';

// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, Container, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../../../components/iconify';

import { useAuth } from '../../../Auth'
import { useMyBar } from '../../../TengoBarAuth'

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  
}));

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { auth, setAuth } = useAuth();

  const { myBar, setMyBar } = useMyBar();

  const [ cambio, setCambio ] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [code, setCode] = useState('');

  const handleClick = () => {
    navigate('/inicio');
    setAuth(true);
  };

  const handleClick2 = () => {
    navigate('/recupero');
  }

  const handleClick3 = () => {
    setCambio(false);
  }

  const handleLoginBar = () => {
    navigate('/inicio');
    setAuth(true);
    setMyBar(true);
  }

  async function getPublicIp() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error al obtener la IP pública:', error);
        return null;
    }
}


  const validateFields = () => {
    if (
      email.trim() === '' ||
      password.trim() === ''

    ) {
      return false; 
    }
    return true; 
  };

  const handleLogin = async () => {

    
    if (!validateFields()) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }

    try {
              // http://18.223.187.221:3000/api/login
              // http://35.169.125.92:3000/api/login
        const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,

        });
        console.log('HOLA1')
        console.log(response.data)
        console.log('HOLA2')


        if (response){
        setCambio(true);
        }
    

  }catch (error) {
    console.log(error)
    alert("Por favor, verifica los datos ingresados")
    }}

  const handleLogin2 = async () => {

  try {

        const ip = await getPublicIp();
        if (!ip) {
          console.error('No se pudo obtener la IP pública.');
          return;
        }
                                        // http://18.223.187.221:3000/api/login
                                        // http://35.169.125.92:3000/api/login
        const response = await axios.post('http://localhost:4000/api/verify-code', {
        email,
        code,
        ip,

        });
        console.log('HOLA1')
        console.log(response.data)
        console.log('HOLA2')
        // Crea el token
        const token = response.data.token;

        if (token){
        document.cookie = `jwtToken=${token}; path=/; SameSite=Strict;`;
        setAuth(true);
        console.log (response.data.rol)
        console.log(response.data.rol === 'master')
        if (response.data.rol === 'master') {
          window.location.replace('https://reconocimiento-facial-master-lucas-projects-1fbddc17.vercel.app/');
        } else {
          window.location.replace('http://localhost:3000/inicio');
        }
        
        } 

        if (response.data.detail && response.data.detail[0] === "No user with this email exists."){
        alert('La dirección de correo electrónico no está registrada');  
        } 
        if (response.data.detail && response.data.detail[0] === "No active account found with the given credentials") {
        alert('La contraseña no es válida');  
        }
        if (response.data.detail && response.data.detail[0] === "Access denied for this user type.") {
        alert('El mail ingresado está registrado');  
        }
    
        } catch (error) {
          if (error.response.status === 403) {
            alert('La IP no se encuentra registrada');}
        else {
          alert("Por favor, verifica los datos ingresados")
        }
        
        }
} 





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
    } else {
      console.error('No se encontró un token JWT en la cookie');
    }

    }

    const handleLogout = () => {
      document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      navigate('/login/cliente');
      setAuth(false);
    };

    

  return (

    <>
      { (!cambio ? (<><Stack spacing={3}>
        <Typography variant="h3" gutterBottom>
              Iniciar Sesión
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              ¿No tenés cuenta? {''}
              <Link variant="subtitle2" onClick={handleClick} sx={{ cursor: 'pointer' }}>Registrate</Link>
            </Typography>
        
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
      </LoadingButton></>) : (
        
        <><Container maxWidth="sm">
      
          <Typography variant="h3" gutterBottom>
              Verificación de cuenta
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            Por favor, ingresá el código que te enviamos a tu correo. 
            <br/>
            <Link sx={{ cursor: 'pointer'}} onClick={handleClick3}>Volver a inicio de sesión</Link>
          </Typography>

          <Stack spacing={3}>
          <TextField name="codigo" label="Código" value={code} onChange={(e) => setCode(e.target.value)} sx={{my:2}}/>
           </Stack>

          <Button fullWidth size="large" type="submit" variant="contained" onClick={handleLogin2}sx={{mt:2}} disableElevation >
           Enviar
            </Button>
            
       
      </Container></>



        ))}

      

      
    </>
  );
}
