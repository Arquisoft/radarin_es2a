import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logout from "../components/Login/Logout";

afterAll(cleanup);

test("LogoutPrueba desconectando", async() => {
  window.sessionStorage.setItem("desconecto","si");
  render(
    <BrowserRouter>
  <Logout />
  </BrowserRouter>
  );
});
