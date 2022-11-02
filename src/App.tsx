import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import reactLogo from './assets/react.svg';

import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  const s = useMemo(() => {
    return count;
  }, [count]);

  return (
    <div className="App">
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
          <Link to="portal">Portal</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
