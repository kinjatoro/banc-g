import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Button} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000e35",
    },
    secondary: {
      main: "#97b59d",
    },
  },
});

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button variant="contained" color = "secondary">
        BOTÓN DE PRUEBA
      </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
