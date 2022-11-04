import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import reactLogo from './assets/react.svg';

import './App.scss';
import useMyHook from './hook';

const copyToClipboard = (str: string) => {
  return navigator.clipboard.writeText(str);
};

function App() {
  const [count, setCount] = useState(0);

  const s = useMemo(() => {
    return count;
  }, [count]);

  const [isOnline, friendID2] = useMyHook(10);

  return (
    <div className="App">
      <div>
        <p onClick={() => copyToClipboard('testing__copyToClipboard')}>
          test copyToClipboard
        </p>
        <textarea />
      </div>
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
      <ul>
        <li>
          react / react-dom <Link to="portal">Portal</Link>
          <Link to="memo">Memo</Link>
          <Link to="context">context</Link>
        </li>
        <li>
          libraries: <Link to="react-query">reactQuery</Link>
          <Link to="zustand1">zustand1</Link>
          <Link to="zustand2">zustand2</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
