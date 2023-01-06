import React, { useEffect, useState } from 'react';
import DetailMain from '../views/Post/Detail/main';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';

const DetailPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <DetailMain />
      <Footer />
    </motion.div>
  );
};

export default DetailPage;
