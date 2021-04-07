// Bootstrap
import { Modal } from 'react-bootstrap';

import { RendaBF } from './RendaBF';
import { Renda500 } from './Renda500';

export function Calendar({ show, close }) {
  return (
    <Modal
      id="modalCalendario"
      tabIndex="-1"
      aria-labelledby="modalCalendarioLabel"
      aria-hidden="true"
      show={show}
      size={'xl'}
      centered
      onHide={close}
    >
      <Modal.Body className="py-4">
        <div className="container-fluid justify-content-center">
          <RendaBF close={close} />
          <Renda500 />
        </div>
      </Modal.Body>
    </Modal>
  );
}
