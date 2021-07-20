// Bootstrap
import { Modal } from 'react-bootstrap';

// import { RendaBF } from './RendaBF';
// import { Renda500 } from './Renda500';
// import { Renda400 } from './Renda400';
import { RendaNovo } from './RendaNovo';

export function Calendar({ show, close }) {
  return (
    <Modal
      id="modalCalendario"
      tabIndex="-1"
      aria-labelledby="modalCalendarioLabel"
      aria-hidden="true"
      show={show}
      size={'lg'}
      centered
      onHide={close}
    >
      <Modal.Body className="py-4">
        <div className="container-fluid justify-content-center">
          <RendaNovo close={close} />
        </div>
      </Modal.Body>
    </Modal>
  );
}
