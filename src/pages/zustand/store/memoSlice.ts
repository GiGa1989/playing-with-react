import { create, StateCreator } from 'zustand';

type State = {
  text: string;
};

type Actions = {
  setText: (newText: string) => void;
};

type Store = State & Actions;

const initialState: State = {
  text: '',
};

const useStore: StateCreator<Store, [], [], Store> = set => ({
  ...initialState,
  text: '',
  setText: (payload: string) => set({ text: payload }),
});

export { useStore };
export type { Store };
