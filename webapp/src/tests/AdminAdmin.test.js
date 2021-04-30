import React from "react";
import {  cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminAdmin from "../components/Admin/AdminAdmin";
import ReactDOM from "react-dom";

let container;
afterAll(cleanup);
describe("<Peticiones />", () => {
  
    test("renders without crashing", async () => {
        const div = document.createElement("div");
        container =  ReactDOM.render(<BrowserRouter>
          <AdminAdmin/>
        </BrowserRouter>, div);
    });

});



