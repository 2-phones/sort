import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Myinfo from '../views/Profile/main';
import { motion } from 'framer-motion';

const MyPage = () => {
  return (
    <>
      <Header />
      <Myinfo />
      <Footer />
    </>
  );
};

export default MyPage;
