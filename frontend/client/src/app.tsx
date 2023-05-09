import GlobalStyle from '@/styles/global.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { motion } from 'framer-motion';
import { appRoutes } from './routes/app.routes';
import { store } from './redux/store';
import Footer from './components/Footer/footer.component';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}></motion.div> */}
        <Routes>
          {appRoutes.map((routeList, index) => (
            <Route key={index} path={routeList.path} element={routeList.element} />
          ))}
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
