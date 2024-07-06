import { create, StateCreator } from 'zustand';

type State = {
  bears: number;
};

type Actions = {
  addBear: () => void;
  reset: () => void;
  incrementBear: (payload: number) => void;
};

type Store = State & Actions;

const initialState: State = {
  bears: 0,
};

// export const useStoree = create<Store>()(set => ({
//   bears: 1,
//   addBear: () => set(state => ({ bears: state.bears + 1 })),
//   incrementBear: () => set(state => ({ count: state.count + 1 })),
// }));

const useStore: StateCreator<Store, [], [], Store> = set => ({
  ...initialState,
  bears: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  incrementBear: (payload: number) =>
    set(state => ({ bears: state.bears + payload })),
  reset: () => {
    set(initialState);
  },
});

export { useStore };
export type { Store };
