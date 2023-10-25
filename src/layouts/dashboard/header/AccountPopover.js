import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
import jwtDecode from 'jwt-decode';
// mocks_
import account from '../../../_mock/account';
import accountBar from '../../../_mock/accountBar';
import accountNo from '../../../_mock/accountNo';

import { useAuth } from '../../../Auth';
import { useMyBar } from '../../../TengoBarAuth';

// ----------------------------------------------------------------------


export default function AccountPopover() {

  const { auth, setAuth } = useAuth();
  const { myBar, setMyBar } = useMyBar();  
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleAuth = () => {
    setOpen(null);
    setAuth(false);
    setMyBar(false);
    navigate('/dashboard/inicio');
  };

  const handleInicio = () => {
    setOpen(null);
    navigate('/dashboard/inicio');
  };

  const handleEventos = () => {
    setOpen(null);
    navigate('/dashboard/blog');
  };

  const handleBares = () => {
    setOpen(null);
    navigate('/dashboard/bares');
  };

  const handleMisEventos = () => {
    setOpen(null);
    navigate('/dashboard/mispublicaciones');
  };
  const handleComentarios = () => {
    setOpen(null);
    navigate('/dashboard/comentarios');
  };
  const handlePerfil = () => {
    setOpen(null);
    navigate('/dashboard/perfilbar');
  };

  function getJwtToken() {
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwtToken='));
    return jwtCookie ? jwtCookie.split('=')[1] : null;
  }
  
  const jwtToken = getJwtToken();
  const decodedToken = jwtToken ? jwtDecode(jwtToken) : null;
  
  const [logo, setLogo] = useState(decodedToken ? decodedToken.logo : accountNo.photoURL);
  const [username, setUsername] = useState(decodedToken ? decodedToken.username : accountNo.displayName);
  const [email, setEmail] = useState(decodedToken ? decodedToken.email : accountNo.email);
  

  

  

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
    
        {auth ? ( myBar ? (<><Avatar src={logo} alt="photoURL" /></>) : (<><Avatar src={account.photoURL} alt="photoURL" /></>)) : (<><Avatar src={accountNo.photoURL} alt="photoURL" /></>)}  
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
          {auth ? ( myBar ? (<>{username} </>) : (<>{account.displayName}</>)) : (<>{accountNo.displayName} </>)}  
   
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {auth ? ( myBar ? (<>{email} </>) : (<>{account.email}</>)) : (<></>)}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          
            <MenuItem onClick={handleInicio}>
              Inicio
            </MenuItem>
            {auth ? (<>

            <MenuItem onClick={handlePerfil}>
            Perfil
            </MenuItem></>) : (<></>)}
            <MenuItem onClick={handleEventos}>
              Eventos
            </MenuItem>
            <MenuItem onClick={handleBares}>
              Bares
            </MenuItem>
            
            
           
          
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        
        
        {myBar ? (<>
        <MenuItem onClick={handleMisEventos} sx={{ m: 1 }}>
          Mis Eventos
        </MenuItem>
        <MenuItem onClick={handleComentarios} sx={{ m: 1 }}>
          Comentarios
        </MenuItem>
        
        </>) : (<></>)}

        <Divider sx={{ borderStyle: 'dashed' }} />
        {auth ? (<>
        <MenuItem onClick={handleAuth} sx={{ m: 1 }}>
          Cerrar sesión
        </MenuItem></>) : (<></>)}


      </Popover>
    </>
  );
}
