import React, { Fragment, useState } from 'react';

import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Form from './components/Form';
import ListOfUsers from './components/List/ListOfUsers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const expampleList = [
    {
      id: 1,
      username: 'Marcin',
      job: 'Student',
      age: 24,
    },
  ];
  const [dataListFromForm, setDataListFromForm] = useState(expampleList);

  const addDataToList = (dataList) => {
    setDataListFromForm((previous) => [dataList, ...previous]);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Form onAddDataToList={addDataToList} />
        <ListOfUsers dataListFromForm={dataListFromForm} />
      </Wrapper>
    </Fragment>
  );
}

export default App;
