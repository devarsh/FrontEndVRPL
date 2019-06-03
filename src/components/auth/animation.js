import React from 'react';
import { useTransition } from 'react-spring';
import PathIndex from 'utils/PathIndex.js';
import { Routes, KEY } from './routes.js';

const CurrPathIndex = PathIndex(Routes, KEY);

export default location => {
  const previous = React.useRef(location.pathname);
  React.useEffect(() => void (previous.current = location.pathname));
  const dir = (curr, prev) => {
    const currIndex = CurrPathIndex(curr);
    const prevIndex = CurrPathIndex(prev);
    const translate = `translate3d(${100 *
      (currIndex < prevIndex ? -1 : currIndex > prevIndex ? 1 : 0)}%,0,0)`;
    return translate;
  };
  const transitions = useTransition(location, location.pathname, {
    config: {},
    from: item => ({ transform: dir(item.pathname, previous.current) }),
    enter: item => ({ transform: 'translate3d(0%,0,0)' }),
    leave: item => ({ transform: dir(item.pathname, location.pathname) })
  });
  return transitions;
};
