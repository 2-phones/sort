import { useState } from 'react';

interface AuthType {
  email: React.ChangeEvent<HTMLInputElement>;
}

export const useInput = () => {
  const [userData, setUserData] = useState<any>({});
  const changehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return [userData, changehandler];
};
