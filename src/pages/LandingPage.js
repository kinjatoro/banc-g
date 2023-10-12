import { React, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import '../App.css';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Button, AppBar, Toolbar, Chip, Stack } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import gorro from '../gorro.png';
import milogo from '../logo.svg';
import musica from '../musica.png';
import { useAuth } from '../Auth';

// ----------------------------------------------------------------------

export default function LandingPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const palabras = ["Jazz", "Rock", "Salsa", "Pop","Blues" ,"Reggae"];
  const colores = ["white", "white", "white", "white","white" ,"white"];
  const iconos = [];
  const [palabraActualIndex, setPalabraActualIndex] = useState(0);
  const [iconoActualIndex, setIconoActualIndex] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  const [iconoKey, setIconoKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMostrar(false); // Comienza a ocultar la palabra actual
      setTimeout(() => {
        setPalabraActualIndex((prevIndex) => (prevIndex + 1) % palabras.length);
        setIconoActualIndex((prevIndex) => (prevIndex + 1) % iconos.length);
        setIconoKey((prevKey) => prevKey + 1);
        setMostrar(true); // Muestra la nueva palabra después de un breve retraso
      }, 500); // Retraso para permitir que se complete la animación de desvanecimiento (500 milisegundos)
    }, 3000); // Cambia la palabra cada 3 segundos (3000 milisegundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [iconos.length, palabras.length]);

  const palabraActual = palabras[palabraActualIndex];
  const colorPalabra = colores[palabraActualIndex];
  const iconoActual = iconos[iconoActualIndex];


  const handleClick = () => {
    navigate('/dashboard/blog');  // para ver publicaciones (alumno)
  }
  
  const handleClick2 = () => {
    navigate('/login');  // para iniciar sesion (profesor)
  }
  
  const handleClick3 = () => {
    navigate('/dashboard/mispublicaciones');  // para ir a mis publicaciones (profesor)
  }

  const handleAuth = () => {
    setAuth(true);
 };
 
 


  return (
    <>
      <Helmet>
        <title> Inicio | FTML </title>
      </Helmet>

      <Container sx={{mb: -10, ms: -3, me:-3 }} disableGutters maxWidth={false} >
        <Typography variant="h4" sx={{ mb: 15 }}/>
          
        
        <Grid container spacing={2}>
          <Grid xs={12} lg={6}>  
            <Grid className="Altura" sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center", ml:3}}>
              <Grid>
                <Typography variant='h1' align = 'center'>Bienvenido a <br /><span className="color-change">For The Music Lovers</span></Typography>
                <Typography variant='h4' align='center' sx={{mt:1}}>¿Ya sabés a dónde vas a salir hoy?</Typography>
              </Grid>
              
              <Grid sx={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "center", mt:3}}>
                <Button variant = "contained" size ='large' sx={{mx:2}} onClick={handleClick} >Descubrir Música </Button> 
                
              </Grid>
            </Grid>
          </Grid>


          
          <Grid className='Ocultar' xs={6} sx={{display: "flex", alignItems: 'center', justifyContent: "center", position: "relative"}}>
            
          

          <img className='RotatingLogo' src={milogo} alt="Rotating Logo"/>
          </Grid>
          

        </Grid>




        <Box sx={{m: 50}} />


        <Box sx={{backgroundColor: "#EA4429", py:15}}>
        <Stack spacing={2} sx={{display: "flex",flexDirection: 'column', alignItems: 'center', justifyContent: "center", my:6, px:2}}>

          
          <Typography variant="h2"  align = 'center' sx={{color: "white"}}> 
            ¿Cuál es tu género favorito?
          </Typography>
          
            <Typography variant="h2" style={{ opacity: mostrar ? 1 : 0, transition: 'opacity 0.5s', color: colorPalabra}}>{palabraActual}</Typography>
            
        </Stack>
        </Box>
        <Box sx={{m: 50}} />

        <Grid sx={{display: "flex",flexDirection: 'column', alignItems: 'center', justifyContent: "center", my:30}}>
        <Typography variant="h2"  align = 'center'>
        ¿Estás listo para empezar?
        </Typography>

        <Button  variant = "contained" sx={{my:2, py:1}} onClick={handleClick} ><Typography variant="h6">Explorá eventos </Typography></Button>
        </Grid>

              
                <AppBar position="relative" sx={{top: 'auto',bottom: 0, width: '100%' }}  >
                  <Toolbar>
                    <Typography variant="body1">
                      © {new Date().getFullYear()} For The Music Lovers.
                    </Typography>
                  </Toolbar>
                </AppBar>
                
      
      </Container>
    </>
  );
}
