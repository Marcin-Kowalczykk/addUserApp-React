import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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

const BoxButton = ({ children, className, type, onClick }) => (
  <Button className={className} type={type || 'button'} onClick={onClick}>
    {children}
  </Button>
);

export default BoxButton;
