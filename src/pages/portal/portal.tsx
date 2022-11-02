import { FunctionComponent, useState } from 'react';

import Modal from './modal/modal';

interface Props {}

const PortalPage: FunctionComponent<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="portal-page">
      <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        This is Modal Content!
      </Modal>
    </div>
  );
};

export default PortalPage;
