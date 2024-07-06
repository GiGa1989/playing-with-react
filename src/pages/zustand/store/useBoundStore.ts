import { create } from 'zustand';
import { useStore as createBearSlice, Store as BearStore } from './bearSlice';
import { useStore as createFishSlice, Store as FishStore } from './fishSlice';
import { useStore as createMemoSlice, Store as MemoStore } from './memoSlice';
import { persist } from 'zustand/middleware';

type Store = BearStore & FishStore;

const useBoundStore = create<Store>((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));

const usePersistStore = create(
  persist<MemoStore>(
    (...a) => ({
      // ...createBearSlice(...a),
      // ...createFishSlice(...a),
      ...createMemoSlice(...a),
    }),
    {
      name: 'bound-store',
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export { useBoundStore, usePersistStore };
