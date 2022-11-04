import { FC } from 'react';
import create, { StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  BearSlice
> = set => ({
  bears: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  eatFish: () =>
    //@ts-ignore
    set(state => ({ fishes: state.fishes - 1 }), false, 'bear/eatFish'),
});

interface FishSlice {
  fishes: number;
  addFish: () => void;
}
const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = set => ({
  fishes: 0,
  // fetch: async (pond: any) => {
  //   const response = await fetch(pond);
  //   set({ fishes: await response.json() });
  // },
  addFish: () => set(state => ({ fishes: state.fishes + 1 })),
});

/*
  // prima
  const useBoundStore = create<BearSlice & FishSlice>()((...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
  }));
*/

// const myMiddlewares = f => devtools(persist(f));

/* 
// persist/devtool test

let store = (...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
});

store = persist(store, {
  name: 'bear-fish', // unique name, può essere un nome diverso
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
});
store = devtools(store);
// const useStore = create(store);

let useBoundStore = create<BearSlice & FishSlice>()(store);

 */

let useBoundStore = create<BearSlice & FishSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createBearSlice(...a),
        ...createFishSlice(...a),
      }),
      {
        name: 'bear-fish', // unique name, può essere un nome diverso
        getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      },
    ),
  ),
);

const ZustandPage2: FC = () => {
  // const bears2 = useBoundStore(state => state.bears);
  const { bears, fishes, addFish, addBear, eatFish } = useBoundStore();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{fishes} fishes</span>
      <span>{bears} bears</span>
      {/* <span>{bears2} bears2</span> */}
      <button onClick={addFish}>addFish</button>
      <button onClick={addBear}>addBear</button>
      <button onClick={eatFish}>eatFish</button>
    </div>
  );
};

export default ZustandPage2;
