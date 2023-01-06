import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import WriteMain from '../views/Profile/Write/WriteMain';
import { motion } from 'framer-motion';

const WritePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <WriteMain />
      <Footer />
    </motion.div>
  );
};

export default WritePage;
