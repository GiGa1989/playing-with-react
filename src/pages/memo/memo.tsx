import { FC, memo, useState } from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {}
export interface BoxProps {
  name: string;
}

const Box: FC<BoxProps> = ({ name }) => {
  console.log('render BOX');
  return <div>welcome {name}</div>;
};

const MemoBox: FC<BoxProps> = memo(({ name }) => {
  console.log('render MEMO_BOX');
  return <div>welcome {name}</div>;
});

const MemoizedBox = memo(Box);

/*
  first render
      render TEST_MEMO
      render BOX
      render MEMO_BOX

  render on click on the button
      render TEST_MEMO
      render BOX
*/

const MemoPage: FC<Props> = () => {
  console.log('render TEST_MEMO');
  const [count, setCount] = useState(0);

  return (
    <div className="memo-page">
      <div className="actions">
        <span className="action" onClick={() => setCount(c => c - 1)}>
          -
        </span>
        {count}
        <span className="action" onClick={() => setCount(c => c + 1)}>
          +
        </span>
      </div>
      <div className="results">
        <Box name="classic_FC" />
        <MemoBox name="memo_FC" />
        <MemoizedBox name="MemoizedBox" />
      </div>
    </div>
  );
};

export default MemoPage;
