import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = ({ classes = 'text-center' }) => {
  return (
    <div className={`${classes} py-3`}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
