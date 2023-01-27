import { autoComma } from '../../util/comma';
import { useState } from 'react';

interface AuthType {
  email: React.ChangeEvent<HTMLInputElement>;
}

export const useInput = () => {
  const [userData, setUserData] = useState<any>({});

  const changehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, files } = e.target;
    const image = files ? URL.createObjectURL(files[0]) : '';

    const price = () => {
      const num = autoComma(value);
      setUserData({ ...userData, [name]: num });
    };

    name === 'img_url'
      ? setUserData({ ...userData, [name]: image })
      : name === 'price'
      ? price()
      : setUserData({ ...userData, [name]: value });
  };

  return [userData, changehandler];
};
