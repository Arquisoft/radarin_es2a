import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RedirectHook from "../components/Login/RedirectHook";

afterAll(cleanup);

test("Redirect prueba", async() => {
  window.sessionStorage.setItem("desconecto","si");
  render(
    <BrowserRouter>
  <RedirectHook />
  </BrowserRouter>
  );
});