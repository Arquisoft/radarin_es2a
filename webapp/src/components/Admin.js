import AdminView from './AdminView';
import { Container } from '@material-ui/core';
import Home from './Home';
import {db} from '../api/firebase'
import { toast } from 'react-toastify';
import React, {useEffect, useState} from 'react'

function Admin() {
    
        return (
        <AdminView/>
        );
    

}

export default Admin