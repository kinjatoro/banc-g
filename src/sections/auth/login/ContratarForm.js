import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useAuth } from '../../../Auth'

// components
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    navigate('/dashboard/blog');
  }
  
  return (
    <>
      <Stack spacing={2}>
        <TextField name="telefono" label="Telefono" />
        <TextField name="mail" label="Mail" />
        <TextField name="horario" label="Horario de referencia"/>
        <TextField name="mensaje" label="Mensaje al proveedor" multiline rows={5}/>
        
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} sx={{mt:3}}>
        Contratar
      </LoadingButton>
    </>
  );
}
