import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  width: 80%;
  background-color: white;
  border-radius: 10px;
`;

const BoxWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default BoxWrapper;
