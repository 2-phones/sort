import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import WriteMain from '../views/Profile/Write/WriteMain';
import { motion } from 'framer-motion';

const WritePage = () => {
  return (
    <>
      <Header />
      <WriteMain />
      <Footer />
    </>
  );
};

export default WritePage;
