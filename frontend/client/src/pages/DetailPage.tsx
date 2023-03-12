import React, { useEffect, useState } from 'react';
import DetailMain from '../views/Post/Detail/main';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DetailPage = () => {
  return (
    <>
      <Header />
      <DetailMain />
      <Footer />
    </>
  );
};

export default DetailPage;
