import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoAuthToken } from '../../api/auth.api';
import { useKaKaoOAuth, useOauth } from '../../hooks/auth.hook';

const KaKaoOatuh = () => {
  const code = window.location.href.split('=')[1].split('&')[0];
  const social_type = localStorage.getItem('social_type') || '';
  const { access_token } = useKaKaoOAuth(code, social_type) || '';

  return <div></div>;
};

export default KaKaoOatuh;
