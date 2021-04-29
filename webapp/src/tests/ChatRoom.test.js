import React from "react";
import { cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import ChatRoom from "../components/Messages/ChatRoom";

afterAll(cleanup);
let container;
test("MapContainer", async() => {
  window.sessionStorage.setItem("user","usuario1@usuario.com");
  const div = document.createElement("div");
  container =  ReactDOM.render(<BrowserRouter>
    <ChatRoom user={window.sessionStorage.getItem('user')}/>
  </BrowserRouter>, div);
 window.sessionStorage.removeItem("user");

  })