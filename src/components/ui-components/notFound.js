import React from 'react';
import Typography from '@mui/material/Typography';

const NotFound = ({ text = 'No Data Found', color = 'text-white' }) => {
  return (
    <Typography p={5} align={'center'} variant={'h5'} color={'primary'}>
      {text}
    </Typography>
  );
};

export default NotFound;