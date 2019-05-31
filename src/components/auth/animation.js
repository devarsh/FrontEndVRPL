import { useRef } from 'react';
import { useTransition } from 'react-spring';
import PathIndex from 'utils/PathIndex.js';
import { Routes, KEY } from './routes.js';

const CurrPathIndex = PathIndex(Routes, KEY);

export default location => {
  let previous = useRef(null);
  let direction = useRef(1);
  const transitions = useTransition(location, `${location.pathname}+Body`, {
    config: {},
    initial: loc => {
      if (previous.current === null) {
        previous.current = CurrPathIndex(loc.pathname);
      }
      return { transform: 'translate3d(0%,0,0)' };
    },
    from: loc => {
      const currentDirection = CurrPathIndex(loc.pathname);
      direction.current = currentDirection < previous.current ? -1 : 1;
      previous.current = currentDirection;
      return { transform: `translate3d(${100 * direction.current}%,0,0)` };
    },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: loc => {
      return { transform: `translate3d(${-100 * direction.current}%,0,0)` };
    }
  });
  return transitions;
};

/*
export default location => {
  const transitions = useTransition(location, location.pathname, {
    config: {},
    initial: { transform: 'translate3d(0%,0,0)' },
    from: { transform: `translate3d(100%,0,0)` },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: `translate3d(-100%,0,0)` }
  });
  return transitions;
};
*/
