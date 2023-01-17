import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import MyPage from '../pages/MyPage';
import SignUp from '../components/auth/SignUp/Signup';
import Login from '../components/auth/General/Login';
import Find from '../components/auth/Find';
import LandingPage from '../pages/LandingPage';
import LoginFindSignup from '../components/Modal/LoginFindSignup';
import WritePage from '../pages/WritePage';
import ErrorPage from '../pages/ErrorPage';
import KakaoRediect from '../components/auth/KaKao/kakaoRediect';
import EditMain from '../views/Profile/Write/EditMain';
import { AnimatePresence } from 'framer-motion';
import GoogleOauth from '../components/auth/google';
import { tokenCheck } from '../util/tokenCheck';
import PrivateRoute from './PrinateRoute';
import MyProfile from '../views/Profile/MyProfile';
import KaKaoOatuh from '../components/auth/kakaoAuth';
import Oauth from '../components/auth/Ouath';

const Routers = () => {
  return (
    <>
      <ScrollInit />
      <Pages />
      <Modals />
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
        <Route path="/loginfindsign" element={<LoginFindSignup />} />s
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/find" element={<Find />} />
        <Route path="/main/detail/:id" element={<DetailPage />} />
        <Route path="/oauth/redirect/google" element={<GoogleOauth />} />
        <Route path="/oauth/redirect/kakao" element={<KaKaoOatuh />} />
        <Route path="/oauth" element={<Oauth />} />
      </Routes>
      <PrivateRoute path="/write" Component={WritePage} />
      <PrivateRoute path="/mypage/sell/edit/:id" Component={WritePage} />
      <PrivateRoute path="/mypage" Component={MyPage} />
      <PrivateRoute path="/mypage/profile" Component={MyProfile} />
    </AnimatePresence>
  );
};

const Modals = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/find" element={<Find />} />
      <Route path="/auth/callback/kakao" element={<KakaoRediect />} />
    </Routes>
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
