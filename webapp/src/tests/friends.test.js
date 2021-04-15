import React from 'react'
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import Friends from '.././components/Friends/Friends';

afterAll(cleanup);
describe('<Friends />',()=>{
  
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Friends />, div);
    });

      

});