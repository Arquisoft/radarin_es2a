import React from "react";
import { db } from "../../api/firebase";
import distance from "../Service/DistanceService";
import { toast } from "react-toastify";
import '../../Toast.css';


    async function notificaAmigoCercano(friendEmail, avisados) {
        const userEmail = await window.sessionStorage.getItem("user")
        await db.collection("locations").
            onSnapshot(
                (querySnapshot) => {
                    const coordTemp1 = {lat:0,lng:0}
                    const coordTemp2 = {lat:0,lng:0}
                    querySnapshot.forEach(element => {
                        if(element.data().email==userEmail){
                            coordTemp1.lat=element.data().lat
                            coordTemp1.lng=element.data().lng
                        }
                        if(element.data().email==friendEmail){
                            coordTemp2.lat=element.data().lat
                            coordTemp2.lng=element.data().lng
                        }
                    });
                    
                            if (!(coordTemp1.lat == 0 || coordTemp1.len == 0 || coordTemp2.lat == 0 || coordTemp2 == 0)){
                            var km = distance(coordTemp1, coordTemp2)
                            var kmFormat = Math.round(km*100)/100;
                            if (!avisados.some(f => (f === friendEmail)) && kmFormat > 0 && kmFormat < 2){
                                avisados.push(friendEmail);
                                notifica(friendEmail + " está a " + kmFormat + " km de ti.")
                            }
                            else
                                if(!avisados.some(f => (f === friendEmail)) && kmFormat >= 0 && kmFormat < 0.2){
                                    avisados.push(friendEmail);
                                    notifica(friendEmail + " y tú estáis en la misma posición.");
                                }
                        }
                    } 
                
            ); 
           
    }

    async function notifica(mensaje){
        toast(mensaje, {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    
    export {notificaAmigoCercano};
