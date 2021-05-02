import React from "react";
import NavBar from ".././components/Navegation/NavBar";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {jest} from "@jest/globals";

afterAll(cleanup);

test("NavBar desconectando", async() => {
  window.sessionStorage.setItem("desconecto","si");
  render(
    <BrowserRouter>
  <NavBar />
  </BrowserRouter>
  );
});

test("NavBar desconectando con usuario", async() => {
  jest.useFakeTimers();
  window.sessionStorage.setItem("user","uo271314@uniovi.es");
  render(
    <BrowserRouter>
  <NavBar />
  </BrowserRouter>
  );
  jest.advanceTimersByTime(1000);
});

