import Template from '@/components/template/template';
import { FC, ReactElement, ReactNode, useRef, useState } from 'react';

const Tooltip: FC<{
  show: boolean;
  message: string | null;
  children: ReactElement;
}> = ({ message, show, children }): ReactElement => {
  if (!show) {
    return children;
  }
  return (
    <div className="tooltip">
      {children}
      <span
        className={['tooltiptext', show && 'visible'].filter(Boolean).join(' ')}
      >
        {message}
      </span>
    </div>
  );
};

const Clipboard: FC = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const copyFormToClipboard = () => {
    const value = inputRef?.current?.value;
    if (!value) {
      setMessage('field is empty');
      setTimeout(() => setMessage(null), 1000);
      return;
    }
    setMessage('copied');
    setTimeout(() => setMessage(null), 1000);
    return navigator.clipboard.writeText(value);
  };

  // @ts-ignore
  const copyToClipboard = (str: string) => {
    console.log('inputRef', inputRef?.current?.value);
    return navigator.clipboard.writeText(str);
  };

  return (
    <Template>
      <div className="clipboard">
        <textarea ref={inputRef} rows={5} />
        <div className="action">
          <Tooltip show={!!message} message={message}>
            <button onClick={() => copyFormToClipboard()}>
              copy the text of the first textarea
            </button>
          </Tooltip>
          <span>
            to verify its functioning then paste it in the textarea below
          </span>
        </div>
        <textarea rows={5} />
      </div>
    </Template>
  );
};

export default Clipboard;
