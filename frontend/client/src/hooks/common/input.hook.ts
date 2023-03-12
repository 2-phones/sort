import { useState } from 'react';

export const useInput = () => {
  const [inputData, SetInputData] = useState({});

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetInputData({ message: e.target.value });
  };

  return { changeHandler, inputData };
};
