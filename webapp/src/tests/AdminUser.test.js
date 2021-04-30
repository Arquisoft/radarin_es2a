import React from "react";
import {  cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import AdminUser from ".././components/Admin/AdminUser";

afterAll(cleanup);
describe("<Peticiones />",()=>{
  
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<AdminUser />, div);
    });

      

});



