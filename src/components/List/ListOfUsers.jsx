import React from 'react';

import BoxWrapper from '../Ui/BoxWrapper';

import ListElement from './ListElement';

const ListOfUsers = ({ dataListFromForm }) => (
  <BoxWrapper>
    {dataListFromForm.map((element) => (
      <ListElement
        key={element.id}
        job={element.job}
        username={element.username}
        age={element.age}
      />
    ))}
  </BoxWrapper>
);

export default ListOfUsers;
