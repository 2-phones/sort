import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Myinfo from '../views/Profile/main';
import { motion } from 'framer-motion';

const MyPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <Myinfo />
      <Footer />
    </motion.div>
  );
};

export default MyPage;
