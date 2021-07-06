import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  width: 80%;
  max-width: 35rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const BoxWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default BoxWrapper;
