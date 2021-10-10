import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import "./index.css"

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='log-in-btn' className='splash-links' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;