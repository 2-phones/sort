import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle';
import Routers from './router/Route';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Modal from './components/Modal';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Routers />
          <Modal />
        </motion.div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
