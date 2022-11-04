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

let store = (set, get) => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 })),
  inc2: (payload: number) => set({ count: get().count + payload }),
});

store = persist(store, {
  name: 'count', // unique name, può essere un nome diverso
  getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
});
store = devtools(store);
const useStore = create(store);

function Counter() {
  const { count, inc, inc2 } = useStore();
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
      <button onClick={() => inc2(10)}>one up</button>
    </div>
  );
}
const ZustandPage: FC = () => {
  return <Counter />;
};

export default ZustandPage;
