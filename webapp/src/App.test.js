import { render, cleanup, fireEvent, screen } from '@testing-library/react';

import App from './App';


afterAll(cleanup);
describe('<App />',()=>{
  
    test('renders without crashing', () => {
        const { getByText } = render(<App />);

        const mainHeader = getByText("Hola");
      
        expect(mainHeader).toBeInTheDocument();

        const text2= screen.getByText(/Iniciar Sesión/i);
        expect(text2).toBeInTheDocument();

        const text1 = screen.getByText(/Registro/i);
        expect(text1).toBeInTheDocument();
      
        const radarin = screen.getByText(/Radarin/i);

        expect(radarin).toBeInTheDocument();
       
    });

});
