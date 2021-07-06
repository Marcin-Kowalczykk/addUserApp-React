import React, { useState } from 'react';

import styled from 'styled-components';
import BoxWrapper from './Ui/BoxWrapper';
import BoxButton from './Ui/BoxButton';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin: 0.5rem;
`;

const Input = styled.input`
  border-radius: 5px;
  outline: none;
  border: 1px solid #00000026;
  &:focus {
    border: 1px solid tomato;
  }
`;

const Form = ({ onAddDataToList }) => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [ageInputValue, setAgeInputValue] = useState('');
  const [jobInputValue, setJobInputValue] = useState('');

  const inputSettersArray = [
    setUsernameInputValue,
    setAgeInputValue,
    setJobInputValue,
  ];

  const clearForm = (inputsArray) => {
    inputsArray.forEach((element) => {
      element(' ');
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const dataObject = {
      id: Math.random().toString(),
      username: usernameInputValue,
      job: jobInputValue,
      age: ageInputValue,
    };
    onAddDataToList(dataObject);
    clearForm(inputSettersArray);
  };

  return (
    <BoxWrapper>
      <Wrapper action="" onSubmit={formSubmitHandler}>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          onChange={(e) => setUsernameInputValue(e.target.value)}
        />
        <Label htmlFor="name">Age ( years )</Label>
        <Input
          id="name"
          type="number"
          onChange={(e) => setAgeInputValue(e.target.value)}
        />
        <Label htmlFor="job">Job</Label>
        <Input
          id="job"
          type="text"
          onChange={(e) => setJobInputValue(e.target.value)}
        />
        <BoxButton type="submit">Add user</BoxButton>
      </Wrapper>
    </BoxWrapper>
  );
};

export default Form;
