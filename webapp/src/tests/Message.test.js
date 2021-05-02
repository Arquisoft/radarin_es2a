import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Message from "../components/Messages/Message";

afterAll(cleanup);

test("NavBar desconectando", async() => {
  window.sessionStorage.setItem("desconecto","si");
  render(
    <BrowserRouter>
  <Message />
  </BrowserRouter>
  );
});