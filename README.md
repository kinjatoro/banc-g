https://mui.com/material-ui/getting-started/

Para correr el programa hay q bajarlo de github, pero tiene q estar la carpeta de node_modules

yo lo q hice es bajar el repositorio y copipastearle el node_modules de otro proyecto react.

Lista de íconos -> https://mui.com/material-ui/material-icons/

---

## **IMPORTACIONES** 

* TIPOGRAFÍA -> import {Typography} from '@mui/material'
* BOTÓN -> import {Button} from '@mui/material';
* ÍCONOS -> import {AcUnit} from '@mui/icons-material'
* ICON-BUTTON -> import {IconButton} from '@mui/material';


----

## **PROMPS**

### BOTÓN `<Button/>`
* color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | string
* href = "google.com"
* size = 'small' | 'medium' | 'large' | string
* variant = 'contained' | 'outlined' | 'text' | string
* startIcon = {</>}
* endIcon = {</>}

### ÍCONOS
* color = 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string
* fontSize = 'inherit' | 'large' | 'medium' | 'small' | string

NOTA: cada ícono se maneja como componente único, es decir, si para botón tenemos `<Button/>`, para icono tenemos
`<CreditCardt/>`, `<DoNotDisturb/>`, y así con cada uno.

### ICON-BUTTON
Siguen la estructura:
```javascript 
<IconButton>
    <CreditCardt/>
</IconButton>
```      

No tiene promps útiles.


### TIPOGRAFÍA `<Typography/>`
* align = 'center' | 'justify' | 'left' | 'right'
* variant = 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2' | string
* color = 'primary' | 'secondary' | 'success'