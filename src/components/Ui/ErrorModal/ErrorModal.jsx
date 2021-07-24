import React from 'react';
import ReactDOM from 'react-dom';

import styled, { keyframes } from 'styled-components';

import Shadow from './Shadow';
import Modal from './Modal';

const AnimationShow = keyframes`
     0% {opacity: 0;}
     100% {opacity: 1;}
`;

const ModalWrapper = styled.div`
  animation: ${AnimationShow} 0.5s;
`;

const ErrorModal = ({ title, msg, onHideModalByButton }) => {
  return (
    <ModalWrapper>
      {ReactDOM.createPortal(
        <Shadow onHideModalByButton={onHideModalByButton} />,
        document.getElementById('shadow-root')
      )}
      {ReactDOM.createPortal(
        <Modal title={title} msg={msg} onHideModalByButton={onHideModalByButton} />,
        document.getElementById('modal-root')
      )}
    </ModalWrapper>
  );
};

export default ErrorModal;
