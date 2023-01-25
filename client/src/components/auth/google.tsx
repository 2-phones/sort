import React from 'react';
import { useOauth } from '../../hooks/auth/auth.hook';

const GoogleOauth = () => {
  const social_type = localStorage.getItem('social_type') || '';
  const access_token = window.location.href.split('=')[1].split('&')[0];
  useOauth(access_token, social_type);
  return <div></div>;
};

export default GoogleOauth;
