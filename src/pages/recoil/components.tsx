import { ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { charCountState, textState } from './store';

export const TestInput: React.FC = () => {
  const onChangeRecoil = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <input type="text" value={text} onChange={onChangeRecoil} />
      <div>text: {text}</div>
    </div>
  );
};

export const TestOutput: React.FC = () => {
  const count = useRecoilValue(charCountState);
  return <div>Character Count: {count}</div>;
};

// export default Test;
