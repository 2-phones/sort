import React from 'react';
import { BounceBall1, BounceBall2, BounceBall3, LodingUI } from './style';

const LodingMotion = () => {
  return (
    <LodingUI>
      <BounceBall1 />
      <BounceBall2 />
      <BounceBall3 />
    </LodingUI>
  );
};

export { LodingMotion };
