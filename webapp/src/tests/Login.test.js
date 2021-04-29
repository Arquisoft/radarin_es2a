import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import Login from ".././components/Login/Login";
import LoginForm from ".././components/Login/LoginForm";
import {  render, screen } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";

let container

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it("Login", () => {
  act(() => {
    ReactDOM.render(<Router>
      <Login />
    </Router>, container)
  })

  expect(container).toBeTruthy()
}) 

test("Aparece bien texto", async () => {
  render(<BrowserRouter><LoginForm /><Route path='/login' exact component={Login}/></BrowserRouter>);
  
  const linkElement = screen.getByText(/¿Tienes un pod?/i);
  const linkElement2 = screen.getByText(/Iniciar sesión con solid/i);
  const linkElement3 = screen.getByText(/CONFIRMAR/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  

});