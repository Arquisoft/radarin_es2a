import React from "react";
import {  cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Profile from "../components/Profile/Profile";

afterAll(cleanup);
let container;

test("Profile", async() => {
  const div = document.createElement("div");
  container =  ReactDOM.render(<BrowserRouter>
    <Profile/>
  </BrowserRouter>, div);

  })
