import { FC } from 'react';
import create from 'zustand';

const useStore = create(set => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore();
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}
const ZustandPage: FC = () => {
  return (
    <div className="main">
      <div className="code">
        <div className="code-container">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ZustandPage;
