import React, { useState, useEffect } from "react";
import { db } from "../../api/firebase";
import distance from "../Service/DistanceService";

export const DistanceBetween = (props) => {

    const [coord1,setCoord1] = useState({ lat: 0, len: 0 });
    const [coord2, setCoord2] = useState({ lat: 0, len: 0 });


    const getDistanciaAmigo = () => {
        if (coord1.lat === 0 || coord1.len === 0) {
            return ("NO DISPONIBLE");
        }
        else {
            if (coord2.lat === 0 || coord2.lng === 0) {
                return ("NO DISPONIBLE");
            } else {
                var km = distance(coord1, coord2);
                var kmFormat = Math.round(km*100)/100;
                return (kmFormat + "km");
            }
        }
    };

    const loadPositions = async () => {
        const friendEmail = props.friendEmail;
        const userEmail = await window.sessionStorage.getItem("user");
        await db.collection("locations").
            onSnapshot(
                (querySnapshot) => {
                    const coordTemp1 = {lat:0,lng:0};
                    const coordTemp2 = {lat:0,lng:0};
                    querySnapshot.forEach(element => {
                        if(element.data().email===userEmail){
                            coordTemp1.lat=element.data().lat;
                            coordTemp1.lng=element.data().lng;
                        }
                        if(element.data().email==friendEmail){
                            coordTemp2.lat=element.data().lat;
                            coordTemp2.lng=element.data().lng;
                        }
                    });
                    setCoord1(coordTemp1);
                    setCoord2(coordTemp2);
                }
                
            )
    }
    

    useEffect(() => {
        loadPositions()
    }, []);

        return (<h4>{getDistanciaAmigo()}</h4>);

}

export default DistanceBetween;
