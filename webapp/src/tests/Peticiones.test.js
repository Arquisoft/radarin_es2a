
import React from "react";
import {  render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import Peticiones from "../components/Friends/Peticiones";
import { BrowserRouter } from "react-router-dom";

afterAll(cleanup);

test("Peticiones con usuario normal", async() => {
    jest.useFakeTimers();
    window.sessionStorage.setItem("user","uo271314@uniovi.es");
    render(
      <BrowserRouter>
    <Peticiones />
    </BrowserRouter>
    );
    jest.advanceTimersByTime(1000);
  });

  test("Peticiones sin usuario", async() => {
    jest.useFakeTimers();
    window.sessionStorage.removeItem("user")
    render(
      <BrowserRouter>
    <Peticiones />
    </BrowserRouter>
    );
    jest.advanceTimersByTime(1000);
  });