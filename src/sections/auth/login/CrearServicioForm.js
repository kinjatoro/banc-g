import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, Container, Box, MenuItem,InputLabel, FormControl, Select } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useAuth } from '../../../Auth'

// components
import Iconify from '../../../components/iconify';




// ----------------------------------------------------------------------

export default function CrearServicioForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    navigate('/dashboard/mispublicaciones');
  }

  
  return (
    <>
      <Stack spacing={2}>
        
      <Box sx={{ minWidth: 120, }}>
      <FormControl fullWidth>
        <InputLabel id="servicio">Servicio</InputLabel>
        <Select
          labelId="servicio"
          id="servicio"
          label="Servicio"
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}

        >
        <MenuItem value="Clases de Arquitectura">Clases de Arquitectura</MenuItem>
        <MenuItem value="Clases de Arte">Clases de Arte</MenuItem>
        <MenuItem value="Clases de Arte Digital">Clases de Arte Digital</MenuItem>
        <MenuItem value="Clases de Baile">Clases de Baile</MenuItem>
        <MenuItem value="Clases de Ciencias">Clases de Ciencias</MenuItem>
        <MenuItem value="Clases de Ciencias">Clases de Ciencias</MenuItem>
        <MenuItem value="Clases de Cocina">Clases de Cocina</MenuItem>
        <MenuItem value="Clases de Canto">Clases de Canto</MenuItem>
        <MenuItem value="Clases de Costura">Clases de Costura</MenuItem>
        <MenuItem value="Clases de Diseño">Clases de Diseño</MenuItem>
        <MenuItem value="Clases de Economía">Clases de Economía</MenuItem>
        <MenuItem value="Clases de Escritura">Clases de Escritura</MenuItem>
        <MenuItem value="Clases de Fitness">Clases de Fitness</MenuItem>
        <MenuItem value="Clases de Fotografía">Clases de Fotografía</MenuItem>
        <MenuItem value="Clases de Guitarra">Clases de Guitarra</MenuItem>
        <MenuItem value="Clases de Historia">Clases de Historia</MenuItem>
        <MenuItem value="Clases de Idiomas">Clases de Idiomas</MenuItem>
        <MenuItem value="Clases de Jardinería">Clases de Jardinería</MenuItem>
        <MenuItem value="Clases de Marketing">Clases de Marketing</MenuItem>
        <MenuItem value="Clases de Matemáticas">Clases de Matemáticas</MenuItem>
        <MenuItem value="Clases de Meditación">Clases de Meditación</MenuItem>
        <MenuItem value="Clases de Natación">Clases de Natación</MenuItem>
        <MenuItem value="Clases de Piano">Clases de Piano</MenuItem>
        <MenuItem value="Clases de Programación">Clases de Programación</MenuItem>
        <MenuItem value="Clases de Psicología">Clases de Psicología</MenuItem>
        <MenuItem value="Clases de Repostería">Clases de Repostería</MenuItem>
        <MenuItem value="Clases de Robótica">Clases de Robótica</MenuItem>
        <MenuItem value="Clases de Teatro">Clases de Teatro</MenuItem>
        <MenuItem value="Clases de Yoga">Clases de Yoga</MenuItem>
        <MenuItem value="Otros">Otros</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="duracion">Duracion</InputLabel>
        <Select
          labelId="duracion"
          id="duracion"
          label="Duracion"
        >
         <MenuItem value="30 Minutos">30 Minutos</MenuItem>
         <MenuItem value="1 Hora">1 Hora</MenuItem>
         <MenuItem value="2 Horas">2 Horas</MenuItem>
         <MenuItem value="3 Horas">3 Horas</MenuItem>
         <MenuItem value="4 Horas">4 Horas</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="frecuencia">Frecuencia</InputLabel>
        <Select
          labelId="frecuencia"
          id="frecuencia"
          label="Frecuencia"
        >
         <MenuItem value="Única">Única</MenuItem>
         <MenuItem value="Semanal">Semanal</MenuItem>
         <MenuItem value="Mensual">Mensual</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <TextField name="descripcion" label="Descripcion" multiline rows={5}/>
        <TextField name="costo" label="Costo (USD)" type="number"/>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} sx={{mt:3}}>
        Publicar
      </LoadingButton>
    </>
  );
}
