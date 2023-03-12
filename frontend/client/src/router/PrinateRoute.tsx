import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { tokenCheck } from '../util/tokenCheck';

const PrivateRoute = ({ path, Component }: any) => {
  const token = tokenCheck();
  return (
    <Routes>
      <Route path={path} element={token ? <Component /> : <ErrorPage />} />
    </Routes>
  );
};

export default PrivateRoute;
