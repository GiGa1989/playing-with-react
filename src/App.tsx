import { useMemo, useState } from 'react';

import reactLogo from './assets/react.svg';
import useMyHook from './hook';

import './App.scss';
import Template from '@/components/template/template';

function App() {
  const [count, setCount] = useState(0);

  const s = useMemo(() => {
    return count;
  }, [count]);

  const [isOnline, friendID2] = useMyHook(10);

  return (
    <Template>
      <div className="App">
        <div>
          test: {String(isOnline)} - {friendID2}
        </div>
        {s}
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Template>
  );
}

export default App;
