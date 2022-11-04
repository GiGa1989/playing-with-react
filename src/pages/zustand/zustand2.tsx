import { FC } from 'react';
import create, { StateCreator, useStore } from 'zustand';

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
  eatFish: () => set(state => ({ fishes: state.fishes - 1 })),
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

const useBoundStore = create<BearSlice & FishSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));

const ZustandPage2: FC = () => {
  const { bears, fishes, addFish, addBear, eatFish } = useBoundStore();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{fishes} fishes</span>
      <span>{bears} bears</span>
      <button onClick={addFish}>addFish</button>
      <button onClick={addBear}>addBear</button>
      <button onClick={eatFish}>eatFish</button>
    </div>
  );
};

export default ZustandPage2;
