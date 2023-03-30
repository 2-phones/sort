import { useState, useEffect } from 'react';
import { useAppSelector } from './redux.hook';

export const useValidate = () => {
  const [check, setCheck] = useState<any>();
  // const { img_url } = useAppSelector((state) => state.posts);

  const postCheck = (data: any) => {
    const postObjectKeys = ['title', 'body', 'price', 'end_date'];
    postObjectKeys.forEach((key) => {
      data[key] 
    });
    const { title, body, price, end_date } = data;
    title && body && price && end_date ? setCheck(true) : setCheck(false);
    data.forEach((postData: any) => {
      postData ? setCheck(true) : setCheck(false);
    });
  };

  return { postCheck, check };
};
