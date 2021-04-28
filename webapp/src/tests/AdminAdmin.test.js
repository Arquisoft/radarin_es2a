import React from 'react'
import {  render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import AdminAdmin from '.././components/Admin/AdminAdmin';
import { BrowserRouter as Router } from 'react-router-dom'

afterAll(cleanup);
describe('<Peticiones />',()=>{
  
    test('renders without crashing', async () => {
        render(<BrowserRouter><Route path="/admin/admins" component={AdminAdmin} /></BrowserRouter>);
    });

      
});



