import { FC } from 'react';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';


/*
  // basic store
  const useStore = create(set => ({
    count: 1,
    inc: () => set(state => ({ count: state.count + 1 })),
  }));
*/

let store = set => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
});

store = persist(store, { name: 'count' });
const useStore = create(store);

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
  return <Counter />;
};

export default ZustandPage;
