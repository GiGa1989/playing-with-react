import { FC } from 'react';
// import ToggleDarkModeConsumer from './component-consumer';
import ToggleDarkModeHook from './component-hook';
import ThemeProvider from './context';
import Template from '@/components/template/template';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const ContextPage: FC<Props> = () => {
  return (
    <Template>
      <ThemeProvider>
        {/* <ToggleDarkModeConsumer /> */}
        <ToggleDarkModeHook />
      </ThemeProvider>
    </Template>
  );
};

export default ContextPage;
