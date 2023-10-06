import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Copyright = (props) =>{
  return (
    <Typography variant="contained" color="inherit" align="center" {...props}>
      {'Copyright © '}
      <Link href="/" sx={{ textDecoration: 'none',  color: 'inherit' }}>
        www.arcuch.cl
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

