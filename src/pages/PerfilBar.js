import { useState } from 'react';


import { styled } from '@mui/material/styles';


import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';



import {AccountProfileDetailsBar, AccountProfileBar} from '../sections/auth/login';

// ----------------------------------------------------------------------


export default function PerfilBar() {




  
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
                <AccountProfileBar />
              </Grid>
              <Grid
                xs={12}
                 md={6}
                lg={8}
              >
                <AccountProfileDetailsBar />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>

     
    </>
  );
}
