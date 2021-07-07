import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import BoxWrapper from './Ui/BoxWrapper';
import BoxButton from './Ui/BoxButton';

import ErrorModal from './Ui/ErrorModal';

const AnimationForm = keyframes`
    0% {margin-left: 80rem;}
    100% {margin-left: 0;}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation: ${AnimationForm} 1s;
`;

const FormWrapper = styled.form`
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

const MainButton = styled(BoxButton)`
  width: 15rem;
`;

const BottomButtons = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Form = ({ onAddDataToList }) => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [ageInputValue, setAgeInputValue] = useState('');
  const [jobInputValue, setJobInputValue] = useState('');
  const [errorState, setErrorState] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const MIN_AGE_LENGTH = 18;

  const inputSettersArray = [
    setUsernameInputValue,
    setAgeInputValue,
    setJobInputValue,
  ];

  const clearForm = (inputsArray) => {
    inputsArray.forEach((element) => {
      element('');
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      usernameInputValue.trim().length === 0 ||
      ageInputValue.trim().length === 0 ||
      jobInputValue.trim().length === 0
    ) {
      setErrorState({
        title: 'Form has empty fields!',
        msg: 'Please complete all fields',
      });
      return;
    } else if (+ageInputValue < MIN_AGE_LENGTH) {
      setErrorState({
        title: 'Age is incorrect!',
        msg: 'Age must be higher (min. 18)',
      });
      return;
    }
    const dataObject = {
      id: Math.random().toString(),
      username: usernameInputValue,
      job: jobInputValue,
      age: ageInputValue,
    };
    onAddDataToList(dataObject);
    clearForm(inputSettersArray);
  };

  if (isClicked === false) {
    return (
      <BoxWrapper>
        <Wrapper>
          <MainButton type="button" onClick={() => setIsClicked(true)}>
            Add new user
          </MainButton>
        </Wrapper>
      </BoxWrapper>
    );
  }

  return (
    <Wrapper>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          msg={errorState.msg}
          onHideModalByButton={() => setErrorState(null)}
        />
      )}
      <BoxWrapper>
        <FormWrapper action="" onSubmit={formSubmitHandler}>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={usernameInputValue}
            onChange={(e) => setUsernameInputValue(e.target.value)}
          />
          <Label htmlFor="name">Age ( years )</Label>
          <Input
            id="name"
            type="number"
            value={ageInputValue}
            onChange={(e) => setAgeInputValue(e.target.value)}
          />
          <Label htmlFor="job">Job</Label>
          <Input
            id="job"
            type="text"
            value={jobInputValue}
            onChange={(e) => setJobInputValue(e.target.value)}
          />
          <BottomButtons>
            <BoxButton type="submit">Add user</BoxButton>
            <BoxButton type="button" onClick={() => setIsClicked(false)}>
              Close
            </BoxButton>
          </BottomButtons>
        </FormWrapper>
      </BoxWrapper>
    </Wrapper>
  );
};

export default Form;

// animacje
