import React, { useState, useEffect } from "react";
import {db} from '../../api/firebase'



const addUserPos = async (lat,lng) => {
    const emailSession = window.sessionStorage.getItem('user');
    const userPos={
        email: emailSession,
        lat: lat,
        lng: lng
    }
        await db.collection('locations').
        doc(emailSession).
        set(userPos)
    }


export default addUserPos;