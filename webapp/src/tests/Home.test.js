import { render, cleanup } from "@testing-library/react";
import Home from "../components/Home";
import {jest} from "@jest/globals";


afterAll(cleanup);
describe("<Home />",() => {
  
    test("renders with user", () => {
        window.sessionStorage.setItem("user","usuario1@usuario.com");
        //Para saltar el error de no encontrar la localización
        const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
          };
          
          global.navigator.geolocation = mockGeolocation;

        render(<Home />);
        window.sessionStorage.removeItem("user");
    });

});