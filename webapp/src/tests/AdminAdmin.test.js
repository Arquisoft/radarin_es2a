import React from 'react'
import {  cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import AdminAdmin from '.././components/Admin/AdminAdmin';

afterAll(cleanup);
describe('<Peticiones />',()=>{
  
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminAdmin />, div);
    });

      

});