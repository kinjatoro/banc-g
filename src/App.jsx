import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Button} from '@mui/material';
import NavBar from './components/NavBar';

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
      <NavBar/>
    </div>
  );
}

export default App;
