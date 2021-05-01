import React from "react";
import { db } from "../../api/firebase";
import distance from "../Service/DistanceService";
import { toast } from "react-toastify";
import '../../Toast.css';
import {Image} from "@solid/react";
import data from "@solid/query-ldflex";
import sinPerfil from "../../images/sinPerfil.png";


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
                                podImage(friendEmail).then((image) =>{
                                    notifica(friendEmail + "\na " + kmFormat + " km de ti.\t\n(Ver mapa)", friendEmail, image)
                                });
                                
                            }
                            else
                                if(!avisados.some(f => (f === friendEmail)) && kmFormat >= 0 && kmFormat < 0.2){
                                    avisados.push(friendEmail);
                                    podImage(friendEmail).then((image) =>{
                                        notifica(friendEmail + "\n posición común. \n(Ver mapa)", friendEmail, podImage(friendEmail));
                                    });
                                }
                        }
                    } 
                
            ); 
           
    }

    const podImage = async (friendEmail) => {
        const querySnapShot = await db.collection("users").get();
        const webId = "";
        querySnapShot.forEach(doc => {
          if (String(doc.data().pod.localeCompare(friendEmail)) === String(0)){
            webId = doc.data().pod;
          }  
        });
        const image = null;
        if (webId != "")
            image = data[webId].vcard_hasPhoto;
        return image;
    }

    
    const msgDistintaPos = (friendEmail,km,image) => (
        <div>
        <div class="left">
            {
                image===null?
                    <img src={sinPerfil} style={{ width: "70px", high: "70px" }}/>:<Image src={image} style={{ width: "70px", high: "70px" }}/>
            }
        </div>
        <div class="right">
            <p style={{fontWeight:"bold", margin:"0"}}>{friendEmail}</p>
            <p style={{margin:"0"}}> a {km} km de ti. </p>
            <p style={{margin:"0"}}> (Ver mapa) </p>
        </div>
        </div>
      )
      const msgMismaPos = (friendEmail) => (
        <div>
            <p></p>
         <h6> My title</h6>
         <p> Some test </p>
        </div>
      )

    async function notifica(mensaje, friendEmail,image){
        toast(msgDistintaPos(friendEmail,5,image), {
            position: "top-right",
            autoClose: 27000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            onClick: () => {window.location.replace("/map/" + friendEmail)}
        });
    }

    
    export {notificaAmigoCercano};
