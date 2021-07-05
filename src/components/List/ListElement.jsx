import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid tomato;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ListElement = ({ job, username, age }) => {
  return (
    <Wrapper>
      <p>{username}</p>
      <p>{job}</p>
      <p>{`wiek: ${age}`}</p>
    </Wrapper>
  );
};

export default ListElement;
