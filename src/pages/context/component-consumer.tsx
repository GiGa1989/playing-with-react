import { ThemeContext } from './context';

const ToggleDarkModeConsumer = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        console.log('ToggleDarkModeConsumer');
        const { dark, toggleDark } = value;
        const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          if (typeof toggleDark === 'function') toggleDark();
        };
        return (
          <>
            <h1>{dark ? '🌙' : '🌞'}</h1>
            <button onClick={handleOnClick}>Toggle dark mode - Consumer</button>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ToggleDarkModeConsumer;
