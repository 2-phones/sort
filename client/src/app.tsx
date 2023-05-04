import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { motion } from 'framer-motion';
import { appRoutes } from './routes/app.routes';

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}></motion.div> */}
      <Routes>
        {appRoutes.map((routeList, index) => (
          <Route key={index} path={routeList.path} element={routeList.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
