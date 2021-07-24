import React from 'react';

import styled from 'styled-components';

const ShadowWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

const Shadow = ({ onHideModalByButton }) => {
  return <ShadowWrapper onClick={onHideModalByButton} />;
};

export default Shadow;
