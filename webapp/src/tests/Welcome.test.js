import React from "react";
import { render } from "@testing-library/react";
import Welcome from "../components/Welcome";

test("check that everything is rendering propertly", async () => {
  const c = render( 
       <Welcome /> 
  );
}); 