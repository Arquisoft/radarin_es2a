import React from "react";
import {  render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import Friends from "../components/Friends/Friends";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);
describe("<Friends />",()=>{
    const div = document.createElement("div");
    const container = ReactDOM.render(
        <Router>
        <Friends />
      </Router>, div);
    it("renders without crashing", () => {
       expect(container).toBeTruthy();
    });
});


