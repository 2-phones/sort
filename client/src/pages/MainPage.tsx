import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ItemsMain from '../views/Post/List';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const MainPage = () => {
  return (
    <>
      <Header />
      <ItemsMain />
      <Footer />
    </>
  );
};

export default MainPage;
