import React from 'react';

const NotFound = ({ text = 'No Data Found', color = 'text-white' }) => {
  return <p className={`py-5 text-center ${color} font-20 mb-0`}>{text}</p>;
};

export default NotFound;
