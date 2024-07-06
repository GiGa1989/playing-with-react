import { StateCreator } from 'zustand';

type State = {
  fish: number;
};

type Actions = {
  addFish: () => void;
  eatFish: () => void;
  reset: () => void;
};

type Store = State & Actions;

const initialState: State = {
  fish: 0,
};

const useStore: StateCreator<Store, [], [], Store> = set => ({
  ...initialState,
  fish: 0,
  addFish: () => set(state => ({ fish: state.fish + 1 })),
  eatFish: () => set(state => ({ fish: state.fish - 1 })),
  reset: () => {
    set(initialState);
  },
});

export { useStore };
export type { Store };
