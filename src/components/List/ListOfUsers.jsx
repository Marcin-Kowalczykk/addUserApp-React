import React from 'react';

import styled from 'styled-components';
import BoxWrapper from '../Ui/BoxWrapper';

import ListElement from './ListElement';

const Ul = styled(BoxWrapper)`
  text-align: center;
`;

const ListOfUsers = ({ dataListFromForm }) => (
  <Ul>
    {dataListFromForm.map((element) => (
      <ListElement
        key={element.id}
        job={element.job}
        username={element.username}
        age={element.age}
      />
    ))}
  </Ul>
);

export default ListOfUsers;
