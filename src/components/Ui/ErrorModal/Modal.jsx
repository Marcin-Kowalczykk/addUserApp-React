import React from 'react';

import styled, { keyframes } from 'styled-components';

import BoxButton from '../BoxButton';

const AnimationShow = keyframes`
    0% {top: -300px}
    100% {top: 10%;}
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
  animation: ${AnimationShow} 0.5s;
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

const Modal = ({ title, msg, onHideModalByButton }) => {
  return (
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
  );
};

export default Modal;
