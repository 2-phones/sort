import { useState, useEffect } from 'react';
import { tree } from '../components/Imgs/imgExport';

export const useValidate = () => {
  const [check, setCheck] = useState<any>();

  const postCheck = (data: any) => {
    const { title, body, price, end_date, img_url } = data;
    title && body && price && end_date && img_url ? setCheck(true) : setCheck(false);
  };
  useEffect(() => {
    postCheck('');
  }, []);

  return { postCheck, check };
};
