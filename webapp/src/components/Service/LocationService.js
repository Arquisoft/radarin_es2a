import React, { useState, useEffect } from "react";
import {db} from '../../api/firebase'



async function addUserPos (lat,lng) {
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

 async function getUserPos(email) {
    var objreturn = {email:'',lat:0,lng:0}
    await db.collection('locations').
            where('email', '==', email)
            .onSnapshot(
                (querySnapshot) => {
                    querySnapshot.forEach(element => {
                        console.log("Bingo")
                        console.log(element.data)
                        objreturn.email = element.data.email
                        objreturn.lat = element.data.lat
                        objreturn.lng = element.data.lng
                        return(objreturn)
                    });
                }
            )
    //console.log(objreturn)
    //return(objreturn)
}
export {addUserPos,getUserPos};

