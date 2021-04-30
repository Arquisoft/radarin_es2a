import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import HomeBar from ".././components/Navegation/HomeBar";

let container

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("HomeBar", () => {
  act(() => {
    ReactDOM.render(<Router>
      <HomeBar />
    </Router>, container)
  })

  expect(container).toBeTruthy()
})