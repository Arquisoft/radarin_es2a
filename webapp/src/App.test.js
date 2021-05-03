import { render, cleanup, fireEvent, screen } from "@testing-library/react";

import App from "./App";


afterAll(cleanup);
describe("<App />", () => {
  
    test("renders without crashing", () => {
        const { getByText } = render(<App />);
       
    });

});
