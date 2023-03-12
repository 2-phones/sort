import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ItemsMain from '../views/Post/List';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import Chat from '../components/chat';

const MainPage = () => {
  return (
    <>
      <Header />
      <Chat />
      <ItemsMain />
      <Footer />
    </>
  );
};

export default MainPage;
