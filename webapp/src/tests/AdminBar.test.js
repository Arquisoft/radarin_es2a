import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import BarraAdmin from ".././components/Navegation/AdminBar";
import {  cleanup } from "@testing-library/react";

let container;
let div;

afterAll(cleanup);
beforeEach(() => {
  div = document.createElement("div");
  container =  ReactDOM.render(<Router>
    <BarraAdmin />
  </Router>, div);
});


it("BarraAdmin", () => {
  expect(container).toBeTruthy();
});