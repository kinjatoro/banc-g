import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useAuth } from '../../../Auth'
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function RegisterFormBar() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
    setAuth(true);
  };

  const handleClick2 = () => {
    navigate('/experiencia', { replace: true });
    setAuth(true);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const handleSubmit = async () => {
    console.log("Datos ingresados: Email:", email, "Contraseña:", password);
    try {
      const response = await axios.post(
        "https://music-lovers-production.up.railway.app/business/register/",
        {
          email,
          password,
          username,
        }
      );

      if (response.access) {
        const token = response.data.access;
    
        document.cookie = `jwtToken=${token}; path=/; SameSite=Strict;`;
    
        console.log("Registro exitoso");}
        else {
          console.log("Error de registro:", response.data);
        }

      
    } catch (error) {
      console.error("Error de registro", error);
    }
  };

  return (
    <>
<Stack spacing={3}>

        <TextField
          name="username"
          label="Nombre del bar"
          value={username}
          onChange={handleChange}
        />

        <TextField
          name="email"
          label="Correo Electrónico"
          value={email}
          onChange={handleChange}
        />
        
        <TextField
          name="password"
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick2}
        sx={{ mt: 3 }}
      >
        Continuar
      </LoadingButton>
      <Button onClick={handleSubmit}>Registrar</Button>
    </>
  );
}
