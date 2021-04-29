import { render, cleanup } from "@testing-library/react";

import Home from "../components/Home";
import {jest} from "@jest/globals";


afterAll(cleanup);
describe('<Home />',()=>{
  
    test('renders without crashing', () => {

        //Para saltar el error de no encontrar la localización
        const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
          };
          
          global.navigator.geolocation = mockGeolocation;

        render(<Home />);
       
    });

});