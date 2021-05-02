import React from "react";
import NavBar from ".././components/Navegation/NavBar";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

afterAll(cleanup);

test("NavBar desconectando", async() => {
  window.sessionStorage.setItem("desconecto","si");
  render(
    <BrowserRouter>
  <NavBar />
  </BrowserRouter>
  );
});



