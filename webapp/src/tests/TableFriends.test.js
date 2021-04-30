import React from "react";
import {  cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import TableFriends from "../components/Friends/TableFriends";

afterAll(cleanup);
describe("<TableFriends />", () => {
  
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<TableFriends />, div);
    });

      

});