import { useState } from 'react';

export const useInput = (initialValue) => {
  // takes in initialValue like useState -> basically wrapper around useState
  const [value, setValue] = useState(initialValue);

  // typical handleChange function
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // return value and functions to be used elsewhere
  return [value, handleChange];
};
