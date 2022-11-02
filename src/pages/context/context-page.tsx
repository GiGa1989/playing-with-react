import { FC } from 'react';
// import ToggleDarkModeConsumer from './component-consumer';
import ToggleDarkModeHook from './component-hook';
import ThemeProvider from './context';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const ContextPage: FC<Props> = () => {
  return (
    <ThemeProvider>
      {/* <ToggleDarkModeConsumer /> */}
      <ToggleDarkModeHook />
    </ThemeProvider>
  );
};

export default ContextPage;
