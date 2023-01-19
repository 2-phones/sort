import { useEffect, useState } from 'react';
import { getUser } from './../api/user.api';

export const useGetProfile = () => {
  const [data, setData] = useState<any>([]);
  const access_token = localStorage.getItem('access_token') || '';
  useEffect(() => {
    const promiseCall = async () => {
      try {
        const result = await getUser(access_token);
        setData(result.data);
      } catch (err) {
        return err;
      }
    };
    promiseCall();
  }, [access_token]);
  return { ...data };
};

