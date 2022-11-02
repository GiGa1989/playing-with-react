import { useContext } from 'react';
import { ThemeContext } from './context';

const ToggleDarkModeHook = () => {
  console.log('ToggleDarkModeHook');

  const { dark, toggleDark } = useContext(ThemeContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof toggleDark === 'function') toggleDark();
  };
  return (
    <>
      <h1>{dark ? '🌙' : '🌞'}</h1>
      <button onClick={handleOnClick}>Toggle dark mode - Hook</button>
    </>
  );
};

export default ToggleDarkModeHook;
