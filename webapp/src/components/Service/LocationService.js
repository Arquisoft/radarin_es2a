import React, { useState, useEffect } from "react";
import {db} from '../../api/firebase'



export async function addUserPos (lat,lng) {
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

export async function getUserPos(email) {
    const coords = await db.collection('locations')
    .doc(email).get()
    return coords;
}

