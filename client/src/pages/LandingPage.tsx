import React from 'react';
import Footer from '../components/Footer/Footer';
import LandingMain from '../views/Landing/main';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <LandingMain />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
