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
  const [dataListFromForm, setDataListFromForm] = useState([]);

  const addDataToList = (dataObjectFromForm) => {
    setDataListFromForm((previous) => [dataObjectFromForm, ...previous]);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Form onAddDataToList={addDataToList} />
        {dataListFromForm.length !== 0 && (
          <ListOfUsers dataListFromForm={dataListFromForm} />
        )}
      </Wrapper>
    </Fragment>
  );
}

export default App;
