import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ItemsMain from '../views/Post/List/main';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const MainPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <ItemsMain />
      <Footer />
    </motion.div>
  );
};

export default MainPage;
