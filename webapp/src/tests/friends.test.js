import React from "react";
import {  render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import Friends from "../components/Friends/Friends";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);
describe("<Friends />",()=>{
  window.sessionStorage.setItem("user","usuario1@usuario.com")
    const div = document.createElement("div");
    const container = ReactDOM.render(
        <Router>
        <Friends />
      </Router>, div);
    it("renders without crashing", () => {
       expect(container).toBeTruthy();
    });
});


/*it("Submitting a name via the input field changes the name state value", () => {
  const { container, rerender } = render(<App />);
  const nameValue = getByTestId(container, "namevalue");
  const inputName = getByTestId(container, "inputName");
  const submitButton = getByTestId(container, "submitRefButton");
  const newName = "Ben";
  fireEvent.change(inputName, { target: { value: newName } });
  fireEvent.click(submitButton);
  expect(nameValue.textContent).toEqual(newName);
  rerender(<App />);
  expect(window.localStorage.getItem("name")).toBe(newName);
});*/