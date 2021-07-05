import React, { useState } from 'react';

import styled from 'styled-components';

import BoxWrapper from './Ui/BoxWrapper';

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

const Button = styled.button`
  align-self: flex-start;
  font-weight: bold;
  color: white;
  width: 5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: tomato;
  cursor: pointer;
  transition: background-color 1s;
  &:hover {
    background-color: #d6452c;
  }
  &:focus {
    background-color: #d6452c;
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
        <Label htmlFor="">Username</Label>
        <Input type="text" onChange={(e) => setUsernameInputValue(e.target.value)} />
        <Label htmlFor="">Age ( years )</Label>
        <Input type="number" onChange={(e) => setAgeInputValue(e.target.value)} />
        <Label htmlFor="">Job</Label>
        <Input type="text" onChange={(e) => setJobInputValue(e.target.value)} />
        <Button type="submit">Add user</Button>
      </Wrapper>
    </BoxWrapper>
  );
};

export default Form;
