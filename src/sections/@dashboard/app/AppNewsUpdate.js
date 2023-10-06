import {useState} from 'react';
// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader, TextField } from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';

// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  
  const [state, setState ] = useState(true);

  const handleClick = () => {
    setState(false);
}

  return (
    <Card {...other}>
      {(state ? (<>
      <CardHeader title={title} subheader={subheader} />
      <Stack spacing={2} sx={{ p: 3, px: 3 }}>
      <TextField name="nombre" label="Nombre"/>
      <TextField name="comentario" label="Agregar un comentario" multiline rows={3}/>
      <div style={{textAlign: "right"}}>
      <Button variant="outlined" onClick={handleClick}>Agregar comentario</Button></div>
      </Stack></>
      ):(
      <>
      <Stack spacing={2} sx={{ p: 3, px: 3 }}>
        <Typography align="center">
          El comentario fue enviado. Estará pendiente a revisión.
        </Typography>
      </Stack>
      </>))}
      
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0, pt:0 }}>
        <Typography variant="h6">Comentarios</Typography>
          {list.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>

    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{borderTop: '1px solid #f0f0f0'}}>
      <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "justify", pr:2 }}>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}
