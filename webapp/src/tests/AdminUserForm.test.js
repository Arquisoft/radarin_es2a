import React from "react";
import {  cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import AdminUserForm from ".././components/Admin/AdminUserForm";

afterAll(cleanup);
describe("<Peticiones />",() => {
  
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<AdminUserForm />, div);
    });

      

});