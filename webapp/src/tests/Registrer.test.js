import React from 'react'
import Registrer from '.././components/Registrer/Registrer';
import { render, fireEvent } from '@testing-library/react';

let container



test('renders without crashing', () => {
  const { getByTestId, getByText } = render(<Registrer />);
  const pod = getByTestId("pod");
  expect(pod).toBeInTheDocument();
  const email = getByTestId("emailRegistro");
  expect(email).toBeInTheDocument();
  const password = getByTestId("passwordRegistro");
  expect(password).toBeInTheDocument();

  const btnRegistro = getByTestId("btnRegistro");
  expect(btnRegistro).toBeInTheDocument();
  fireEvent.click(btnRegistro);
 
});