import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import EditMain from '../views/Profile/Write/EditMain';
import { motion } from 'framer-motion';

const EditPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <EditMain />
      <Footer />
    </motion.div>
  );
};

export default EditPage;
