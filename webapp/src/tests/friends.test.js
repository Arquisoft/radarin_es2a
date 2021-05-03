import React from "react";
import {  fireEvent, render, cleanup, screen  } from "@testing-library/react";
import Friends from "../components/Friends/Friends";
import { BrowserRouter } from "react-router-dom";

afterAll(cleanup);
test("Peticiones con usuario normal", async() => {
    jest.useFakeTimers();
    window.sessionStorage.setItem("user","usuario1@usuario.com");
    render(
      <BrowserRouter>
    <Friends />
    </BrowserRouter>
    );
    const linkElement = screen.getByText(/Estos son tus amig@s:/i);
    expect(linkElement).toBeInTheDocument();
    //fireEvent.click(linkElement);
    jest.advanceTimersByTime(1000);
    
  });

  test("Peticiones sin usuario", async() => {
    jest.useFakeTimers();
    window.sessionStorage.removeItem("user")
    render(
      <BrowserRouter>
    <Friends />
    </BrowserRouter>
    );
    jest.advanceTimersByTime(1000);
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