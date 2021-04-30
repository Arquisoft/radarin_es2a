import React from "react";
import UserBar from ".././components/Navegation/UserBar";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


test("usuario presiona desconectar", () => {
  window.sessionStorage.setItem("user","usuario1@usuario.com");
  const { getByTestId} = render(
  <BrowserRouter>
  <UserBar />
  </BrowserRouter>
   );
  const logout = getByTestId("logout");
  expect(logout).toBeInTheDocument();
  fireEvent.click(logout);
  
 
});