import { FC, memo, useState } from 'react';

export interface Props extends React.HTMLAttributes<HTMLElement> {}
export interface BoxProps {
  name: string;
}

export interface Person {
  name: string;
  age: number;
}
export interface Box2Props {
  list: Person[];
}

const Box: FC<BoxProps> = ({ name }) => {
  console.log('render BOX');
  return <div>welcome {name}</div>;
};

//@ts-ignore
const MemoBox: FC<BoxProps> = memo(
  ({ name }) => {
    console.log('render MEMO_BOX');
    return <div>welcome {name}</div>;
  },
  (prevProps, nextProps) => {
    console.log(
      'LOG-ENH 🚀 ~ file: memo.tsx:17 ~ constMemoBox:FC<BoxProps>=memo ~ prevProps, nextProps',
      prevProps.name,
      nextProps.name,
    );
    return true;
    // se coincidono, no rerender
    // se non coincidono, rerender
  },
);

// const MemoizedBox = memo(Box);

//@ts-ignore
const Box2: FC<Person> = ({ name, age }) => {
  console.log('render BOX2');
  return (
    <div>
      {name}-{age}
    </div>
  );
};

const MemoizedBox2: FC<Person> = memo(({ name, age }) => {
  console.log('render MEMO_BOX2');
  return (
    <div>
      {name}-{age}
    </div>
  );
});

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
  const [people, setPeople] = useState<Person[]>([
    { name: 'n1', age: 1 },
    { name: 'n2', age: 2 },
    { name: 'n3', age: 3 },
  ]);

  return (
    <div className="memo-page">
      <div className="actions">
        <span
          className="action"
          onClick={() => {
            setCount(c => c - 1);
            setPeople(l => [
              ...l.map(i =>
                i.name === 'n1' ? { ...i, age: i.age - 1 } : { ...i },
              ),
            ]);
          }}
        >
          -
        </span>
        {count}
        <span
          className="action"
          onClick={() => {
            setCount(c => c + 1);
            setPeople(l => [
              ...l.map(i =>
                i.name === 'n3' ? { ...i, age: i.age + 1 } : { ...i },
              ),
            ]);
          }}
        >
          +
        </span>
      </div>
      <div className="results">
        {/* <Box name="classic_FC" />
        <MemoBox name="memo_FC" /> */}
        {/* <MemoizedBox name="MemoizedBox" /> */}
        {people.map((item, key) => (
          <div key={key}>
            {/* <Box2 name={item.name} age={item.age} /> */}
            <MemoizedBox2 name={item.name} age={item.age} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoPage;
