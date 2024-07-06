import { ChangeEvent } from 'react';
import { useBoundStore, usePersistStore } from './store/useBoundStore';

export const BoundStoreInput: React.FC = () => {
  const { incrementBear, addFish } = useBoundStore();
  return (
    <div>
      <button onClick={() => incrementBear(10)}>up bear</button>
      <button onClick={addFish}>one up fish</button>
    </div>
  );
};

export const BoundStoreOutput: React.FC = () => {
  const { bears, fish } = useBoundStore();
  return (
    <div>
      <span>bears: {bears}</span>
      <span>fish: {fish}</span>
    </div>
  );
};

export const PersistStoreInput: React.FC = () => {
  const text = usePersistStore(state => state.text);
  const setText = usePersistStore(state => state.setText);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Character Count: {text.length}</p>
    </div>
  );
};
