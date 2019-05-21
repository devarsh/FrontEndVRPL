import { useRef } from 'react';
import { useTransition } from 'react-spring';
import { PathIndex } from './routes.js';

export default location => {
  let previous = useRef(null);
  let direction = useRef(1);
  const transitions = useTransition(location, location.pathname, {
    config: {},
    initial: loc => {
      if (previous.current === null) {
        previous.current = PathIndex(loc.pathname);
      }
      return { transform: 'translateX(0%)' };
    },
    from: loc => {
      const currentState = PathIndex(loc.pathname);
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
