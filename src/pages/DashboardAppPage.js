import { React } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import '../App.css';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Button, AppBar, Toolbar } from '@mui/material';
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
import { useAuth } from '../Auth';




// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();


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
        <title> Inicio | Neilo </title>
      </Helmet>

      <Container sx={{mb: -10, ms: -3, me:-3 }} disableGutters maxWidth={false} >
        <Typography variant="h4" sx={{ mb: 15 }}/>
          
        



        <Grid container spacing={2}>
          <Grid xs={12} lg={6}>  
            <Grid className="Altura" sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
              <Grid>
                <Typography variant='h1' align = 'center'>Bienvenido a <span className="color-change">Neilo</span></Typography>
                <Typography variant='h4' align='center' sx={{mt:1}}>El aprendizaje se adapta a vos.</Typography>
              </Grid>
              
              <Grid sx={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: "center", mt:3}}>
                <Button variant = "contained" size ='large' sx={{mx:2}} onClick={handleClick} >Soy alumno </Button> 
                <Button variant = "outlined" size ='large' onClick={ auth ? handleClick3 : handleClick2} >Soy profesor</Button>
              </Grid>
            </Grid>
          </Grid>


          
          <Grid className='Ocultar' xs={6} sx={{display: "flex", alignItems: 'center', justifyContent: "center", position: "relative"}}>
            
           <img className='StaticLogo' src={gorro} alt="Static Logo" />
           <img className='RotatingLogo' src={milogo} alt="Static Logo"/>
          </Grid>
          

        </Grid>




        <Box sx={{m: 100}} />

        <Grid sx={{display: "flex",flexDirection: 'column', alignItems: 'center', justifyContent: "center", my:4}}>
        <Typography variant="h2"  align = 'center'>
          ¿Qué podés hacer en Neilo?
        </Typography>

        <Button  variant = "contained" sx={{my:2, py:1}} onClick={handleClick} ><Typography variant="h6">Explorá nuestros servicios </Typography></Button>
        </Grid>
        
        <Box sx={{m: 100}} />

        <Grid sx={{display: "flex",flexDirection: 'column', alignItems: 'center', justifyContent: "center", my:4}}>
        <Typography variant="h2"  align = 'center'>
        ¿Estás listo para empezar a aprender?
        </Typography>

        <Button  variant = "contained" sx={{my:2, py:1}} onClick={handleClick} ><Typography variant="h6">Explorá nuestros servicios </Typography></Button>
        </Grid>

              
                <AppBar position="relative" sx={{top: 'auto',bottom: 0, width: '100%' }}  >
                  <Toolbar>
                    <Typography variant="body1">
                      © {new Date().getFullYear()} Neilo
                    </Typography>
                  </Toolbar>
                </AppBar>
                
      
      </Container>
    </>
  );
}
