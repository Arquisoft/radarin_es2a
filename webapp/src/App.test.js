import { render, cleanup } from '@testing-library/react';

import App from './App';
import ReactDOM from 'react-dom';
afterAll(cleanup);
describe('<App />',()=>{
  
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('App renders without crashing', () => {
        
        const { container } = render(<App />);
        expect(container).toBeTruthy();
      });

});
