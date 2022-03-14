import React from 'react';
import { Modal } from 'rsuite';
import '../css/WelcomeModal.css';
import logo from '../images/logo_transparent_background.png';
import welcome from '../content/welcome';

function WelcomeModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal className='modal-header' backdrop={true} open={open} onClose={handleClose} >
      <Modal.Header>
      <img className='modal-logo' src={logo} alt='Riley Ellwanger'/>
      </Modal.Header>
      <Modal.Body>
        <h3>Hello, World!</h3>
        {welcome}
      </Modal.Body>
    </Modal>
  )
}

export default WelcomeModal;