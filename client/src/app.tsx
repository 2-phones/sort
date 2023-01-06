import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle';
import Routers from './Router/Route';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './views/Login';
import Signup from './views/Signup';
import Modal from './components/Modal';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <Routers />
        <Modal />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
