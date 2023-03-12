import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import MyPage from '../pages/MyPage';
import LandingPage from '../pages/LandingPage';
import WritePage from '../pages/WritePage';
import ErrorPage from '../pages/ErrorPage';
import { AnimatePresence } from 'framer-motion';
import GoogleOauth from '../components/auth/google';
import { tokenCheck } from '../util/tokenCheck';
import PrivateRoute from './PrinateRoute';
import MyProfile from '../views/Profile/MyProfile';
import KaKaoOatuh from '../components/auth/kakaoAuth';
import Oauth from '../components/auth/Ouath';
import EditPage from '../pages/EditPage';

const Routers = () => {
  return (
    <>
      <ScrollInit />
      <Pages />
    </>
  );
};

const Pages = () => {
  const navigate = useNavigate();
  const token = tokenCheck();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        {/* <Route path="/chat" element={<ChatPage />} /> */}
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/main/detail/:id" element={<DetailPage />} />
        <Route path="/oauth/redirect/google" element={<GoogleOauth />} />
        <Route path="/oauth/redirect/kakao" element={<KaKaoOatuh />} />
        <Route path="/oauth" element={<Oauth />} />
      </Routes>
      <PrivateRoute path="/write" Component={WritePage} />
      <PrivateRoute path="/mypage/sell/edit/:id" Component={EditPage} />
      <PrivateRoute path="/mypage" Component={MyPage} />
      <PrivateRoute path="/mypage/profile" Component={MyProfile} />
    </AnimatePresence>
  );
};

const ScrollInit = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default Routers;
