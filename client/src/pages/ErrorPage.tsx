import React from 'react';
import ErrorMain from '../components/Error/ErrorMain';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <ErrorMain />
      <Footer />
    </motion.div>
  );
};

export default ErrorPage;
