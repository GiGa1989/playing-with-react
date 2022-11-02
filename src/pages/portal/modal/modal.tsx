import { FunctionComponent, ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import ReactPortal from '../react-portal';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: FunctionComponent<Props> = ({ children, isOpen, handleClose }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e: { key: string }) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};
export default Modal;
