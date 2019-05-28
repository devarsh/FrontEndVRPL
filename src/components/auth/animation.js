import { useRef } from 'react';
import { useTransition } from 'react-spring';
import PathIndex from 'utils/PathIndex.js';
import { Routes, KEY } from './routes.js';

import useRouter from 'context/useRouter.js';

const CurrPathIndex = PathIndex(Routes, KEY);

export default () => {
  let previous = useRef(null);
  let direction = useRef(1);
  const { location } = useRouter();
  const transitions = useTransition(location, location.pathname, {
    config: {},
    initial: loc => {
      if (previous.current === null) {
        previous.current = CurrPathIndex(loc.pathname);
      }
      return { transform: 'translateX(0%)' };
    },
    from: loc => {
      const currentState = CurrPathIndex(loc.pathname);
      direction.current = currentState < previous.current ? -1 : 1;
      previous.current = currentState;
      return { transform: `translateX(${100 * direction.current}%)` };
    },
    enter: { transform: 'translateX(0%)' },
    leave: loc => {
      return { transform: `translateX(${-100 * direction.current}%)` };
    }
  });
  return transitions;
};
