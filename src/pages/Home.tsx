import React, { useContext } from 'react';
import { typingCategories } from '../lib/typingModes';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MynameText } from './Context/NameContext';

const parentBoxSx = {
  width: '100vw',
  minHeight: '100vh',
  p: { xs: 3, md: 6 },
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  display: 'flex',           
  flexDirection: 'column', 
  alignItems: 'center',
};

const childBoxSx = {
  borderRadius: 4,
  p: 3,
  width: 260,
  boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const parentTitleySx = {
  color: '#2E7D32',
  mb: 5,
  textAlign: 'center',
  textShadow: '2px 2px 4px #A5D6A7',
  userSelect: 'none',
  fontWeight: 'bold',
  fontSize: { xs: '2.5rem', md: '3rem' },
};

const childTitleSx = {
  color: '#3E2723',
  mb: 3,
  fontWeight: 700,
  userSelect: 'none',
  textShadow: '1px 1px 2px #fff',
  fontSize: '1.8rem',
};

const ButtonSx = {
  color: '#3E2723',
  borderRadius: '25px',
  padding: '12px 20px',
  fontWeight: 700,
  fontSize: '1.2rem',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  textTransform: 'none',
  boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  userSelect: 'none',
  letterSpacing: '0.03em',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.1) rotate(-2deg)',
    boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
  },
};

const modeSx = {
  fontSize: '0.9rem',
  fontWeight: 400,
  mt: 0.3,
  color: '#4A4A4A',
  textShadow: '1px 1px 0 #fff',
  whiteSpace: 'normal',
};

const Home: React.FC = () => {
  const navigate = useNavigate()
  const myName = useContext(MynameText)

  return (
    <Box sx={parentBoxSx}>
      <Typography variant="h2" component="h1" sx={parentTitleySx}>
        タイピング一覧
      </Typography>

      <Stack direction="row" spacing={6}>
        {typingCategories.map((category) => (
          <Box
            key={category.id}
            sx={{ ...childBoxSx, backgroundColor: category.color }}
          >
            <Typography variant="h5" component="h2" sx={childTitleSx}>
              {category.title}
            </Typography>

            <Stack spacing={2} sx={{ width: '100%' }}>
              {category.modes.map((mode) => (
                <Button
                  key={mode.id}
                  variant="contained"
                  onClick={() => navigate(`/practice/${mode.id}`)}
                  sx={{ ...ButtonSx, backgroundColor: mode.color }}
                >
                  {mode.title}
                  <Typography component="div" sx={modeSx}>
                    {mode.description}
                  </Typography>
                </Button>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
      <Typography variant="h2" component="h1">こんにちは！{myName.Myname}さん</Typography>
    </Box>
  );
};

export default Home;
