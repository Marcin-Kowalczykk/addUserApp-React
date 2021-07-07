import React from 'react';

import styled, { keyframes } from 'styled-components';

const AnimationShow = keyframes`
    0% {margin-right: 210px;}
    100% {margin-right: 0;}
`;

const Wrapper = styled.li`
  display: flex;
  justify-content: space-around;
  border: 1px solid tomato;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: tomato;
  color: white;
  font-weight: bold;
  animation: ${AnimationShow} 1s;
`;

const ListElement = ({ job, username, age }) => {
  return (
    <Wrapper>
      <p>{username}</p>
      <p>{job}</p>
      <p>{`Age: ${age}`}</p>
    </Wrapper>
  );
};

export default ListElement;
