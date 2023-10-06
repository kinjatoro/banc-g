import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Button, Grid, Avatar, Typography, CardContent,Stack } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(30% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textDecoration: 'none',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 64,
  height: 64,
  position: 'absolute',
  right: theme.spacing(7.25),
  bottom: theme.spacing(-3.5),
}));

const StyledInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCardInd.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCardInd({ post, index }) {
  const { cover, title, view, price, share, author, createdAt } = post;
  const latestPostLarge = index === 500;
  const latestPost = index === 501 || index === 502;

  const POST_INFO = [
    { string: share, icon: 'mdi:clock' },
    { string: view, icon: 'solar:calendar-bold-duotone' },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/individualblog/${post.id}`);
  };

  const handleClick2 = () => {
    navigate('/dashboard/contratar');
  };

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card sx={{ position: 'relative', borderRadius: "0px"}}>
        <StyledCardMedia
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(10% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(10% * 4 / 3)',
                sm: 'calc(10% * 3 / 4.66)',
              },
            }),
          }}
        >
          <div style={{display: "flex", justifyContent: "flex-end"}}>
          <SvgColor
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
              width: 180,
              height: 72,
              zIndex: 9,
              bottom: -30,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          /> </div>
          <StyledAvatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="subtitle1" sx={{ color: 'text.disabled', display: 'block' }}>
            Publicación creada el {fDate(createdAt)}.
          </Typography>

          <StyledTitle
            color="inherit"
            variant="h6"
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
              }),
            }}
          > 
         
          <Box sx={{display: "flex", flexDirection: "row", alignItems: 'center'}}>
              {author.name} </Box>
          </StyledTitle>
          
          <Typography sx={{textAlign: "justify", mt:-1}}>Soy un apasionado educador con una sólida formación académica. Graduado con honores en Educación de la Universidad de Ciudad Ficticia, continué mi desarrollo profesional obteniendo una maestría en Pedagogía en la Universidad de Bogotá, donde me enfoqué en integrar la tecnología en el aula para mejorar la experiencia de aprendizaje. Título: Licenciado en historia.</Typography>
          <Box sx={{borderTop: '1px solid #f0f0f0', mt:2}}> </Box>
          
          <Typography sx={{textAlign: "justify", mt:2}}>Nuestra clase ofrece una emocionante y educativa experiencia en el agua para personas de todas las edades y niveles de habilidad. Diseñada para fomentar la confianza en el agua y mejorar las habilidades de natación, nuestra clase se lleva a cabo en un ambiente seguro y supervisado por instructores altamente calificados.</Typography>
            
          <StyledInfo>
            <div style={{display: 'flex', flexContent:"row"}}>
          <Typography variant="h5" sx={{mr:2, color: "black"}}>{price}</Typography>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: 1.5,
                }}
              >
                 <Iconify icon={info.icon} sx={{ width: 24, height: 24, mr: 0.5, mt:-1 }} />
                <Typography variant="body2" sx={{mt:-0.7}}>
                  {(info.string)}
                  </Typography>
                
                
              </Box>
            ))}</div>
            <Button onClick={handleClick2} variant="contained" >Contratar</Button>
          </StyledInfo>
        </CardContent>
      </Card>
    </Grid>
  );
}
