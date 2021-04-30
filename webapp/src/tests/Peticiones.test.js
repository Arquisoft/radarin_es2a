
import React from "react";
import {  cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import Peticiones from "../components/Friends/Peticiones";

afterAll(cleanup);
describe("<Peticiones />", () => {
  
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Peticiones />, div);
    });

      

});