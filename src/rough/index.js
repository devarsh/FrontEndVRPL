import React from 'react';

import { CountProvider, useCountUpdater, useCountState } from './countContext';

function useRenderCounter() {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.textContent = Number(ref.current.textContent || '0') + 1;
  });
  return (
    <span
      style={{
        background: '#ccc',
        borderRadius: 4,
        padding: '2px 4px',
        fontSize: '0.8 rem',
        margin: '0 6px',
        display: 'inline-block'
      }}
      ref={ref}
    />
  );
}

const CountDisplay = React.memo(function CountDisplay() {
  const count = useCountState();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      {renderCount}
      {`The current count is ${count}.`}
    </div>
  );
});

const Counter = React.memo(function Counter() {
  const increment = useCountUpdater();
  const renderCount = useRenderCounter();
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      {renderCount}
      <button onClick={increment}>Increment Count</button>
    </div>
  );
});

function RefChecker() {
  const instVal = React.useRef();
  const [, updater] = React.useState(0);
  if (instVal.current === undefined) {
    instVal.current = { prev: updater };
  } else {
    console.log(instVal.current.prev === updater);
    console.log(instVal, updater);
  }
}

function App() {
  const [, forceUpdate] = React.useState();
  const renderCount = useRenderCounter();
  RefChecker();
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      {renderCount}
      <button onClick={() => forceUpdate({})}>force Render</button>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;
