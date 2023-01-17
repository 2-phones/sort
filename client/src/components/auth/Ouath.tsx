import React from 'react';
import { useOauth } from '../../hooks/auth.hook';

const Oauth = () => {
  const social_type = localStorage.getItem('social_type') || '';
  const token = localStorage.getItem('kakaoToken') || '';
  useOauth(token, social_type);
  localStorage.removeItem('kakaoToken');
  return <div></div>;
};

export default Oauth;
