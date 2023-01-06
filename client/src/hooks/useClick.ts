import { useState } from 'react';

interface ClickHooks {
  isClick: boolean;
  clickHandler: () => void;
}

export const useClick = (): ClickHooks => {
  const [isClick, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!isClick);
  };

  return { isClick, clickHandler };
};
