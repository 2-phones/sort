import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}></motion.div> */}
      <div>sdsd</div>
    </BrowserRouter>
  );
};

export default App;
