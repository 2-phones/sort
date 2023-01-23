import React from 'react';
import ErrorMain from '../components/Error/ErrorMain';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <ErrorMain />
      <Footer />
    </>
  );
};

export default ErrorPage;
