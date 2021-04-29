import React from "react";
import { cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import DistanceBetween from "../components/Friends/DistanceBetween";

afterAll(cleanup);
let container;
test("DistanceBetween", async() => {
  window.sessionStorage.setItem("user","usuario1@usuario.com");
  const div = document.createElement("div");
  container =  ReactDOM.render(<BrowserRouter>
    <DistanceBetween friendEmail={"usuario2@usuario.com"}/>
  </BrowserRouter>, div);
 window.sessionStorage.removeItem("user");

  })




