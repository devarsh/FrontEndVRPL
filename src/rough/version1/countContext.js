import React from 'react';

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => {
    return {
      count,
      setCount
    };
  }, [count]);
  //const value = { count, setCount };
  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const conext = React.useContext(CountContext);
  if (!conext) {
    throw new Error('useCount must be used within a CountProvider');
  }
  const { count, setCount } = conext;
  const increment = () => setCount(c => c + 1);
  return {
    count,
    increment
  };
}

export { CountProvider, useCount };
