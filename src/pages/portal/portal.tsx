import { FunctionComponent, useState } from 'react';

import Modal from './modal/modal';
import ReactPortal from './react-portal';
import Template from '@/components/template/template';

interface Props {}

const PortalPage: FunctionComponent<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPortal, setIsOpenPortal] = useState(false);

  return (
    <Template>
      <div className="portal-page">
        <ReactPortal wrapperId="portal-test">
          <button
            onClick={() => setIsOpenPortal(isOpen => !isOpen)}
            style={{ position: 'fixed', bottom: '4vh', right: '4vw' }}
          >
            {isOpenPortal ? 'hide' : 'show'} portal
          </button>
        </ReactPortal>

        {isOpenPortal ? (
          <>
            <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>
            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
              This is Modal Content!
            </Modal>
          </>
        ) : null}
      </div>
    </Template>
  );
};

export default PortalPage;
