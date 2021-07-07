import React from 'react';

import styled, { keyframes } from 'styled-components';
import BoxButton from './BoxButton';

const AnimationShow1 = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

const AnimationShow2 = keyframes`
    0% {top: -300px}
    100% {top: 10%;}
`;

const ModalWrapper = styled.div`
  animation: ${AnimationShow1} 0.5s;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  overflow: hidden;
  width: 80%;
  max-width: 25rem;
  background: white;
  border-radius: 1rem;
  animation: ${AnimationShow2} 0.5s;
`;

const Header = styled.header`
  text-align: center;
  background-color: #ff63479b;
  padding: 0.1rem;
`;

const H2 = styled.h2`
  margin: 0.5rem;
  color: red;
`;

const MsgSection = styled.section`
  text-align: center;
  color: red;
  font-weight: bold;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const ErrorModal = ({ title, msg, onHideModalByButton }) => {
  return (
    <ModalWrapper>
      <Shadow onClick={onHideModalByButton} />
      <ContentWrapper>
        <Header>
          <H2>{title}</H2>
        </Header>
        <MsgSection>
          <p>{msg}</p>
        </MsgSection>
        <Footer>
          <BoxButton onClick={onHideModalByButton}>Close</BoxButton>
        </Footer>
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default ErrorModal;
