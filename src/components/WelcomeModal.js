import React from 'react';
import { Modal } from 'rsuite';
import '../css/WelcomeModal.css';
import logo from '../images/logo_transparent_background.png';

function WelcomeModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Modal className='modal-header' backdrop={true} open={open} onClose={handleClose} >
      <Modal.Header>
      <img className='modal-logo' src={logo} alt='Riley Ellwanger'/>
      </Modal.Header>
      <Modal.Body>
        <h3>Hello, World!</h3>
        <p>Welcome to my personal website and portfolio, and thanks for stopping by.
          Here you'll find info about myself, and my software development experience. </p><br/>
        <p>This is a work in progress, and I'll be updating as often as I can. Feel free to reach 
          out with feedback.</p>
      </Modal.Body>
    </Modal>
  )
}

export default WelcomeModal;