import React from "react";
import { db } from "../../api/firebase";
import distance from "../Service/DistanceService";
import { toast } from "react-toastify";
import '../../Toast.css';
import {Image} from "@solid/react";
import data from "@solid/query-ldflex";
import sinPerfil from "../../images/sinPerfil.png";
import {getSolidDataset,getThing,getStringNoLocale} from "@inrupt/solid-client";
import {FOAF} from "@inrupt/vocab-common-rdf";


    async function notificacionTodosAmigos() {
        var usuarioActivo = window.sessionStorage.getItem("user");
        if (window.sessionStorage.getItem("user") === null)
            usuarioActivo= window.sessionStorage.getItem("pod");

            db.collection("amigos").onSnapshot((querySnapShot) => {
                querySnapShot.forEach((doc) => {
                  if (String(doc.data().usuario1.localeCompare(usuarioActivo)) === String(0)) {
                    notificaAmigoCercano(doc.data().usuario2,[]);
                  }
                  if ((String(doc.data().usuario2.localeCompare(usuarioActivo)) === String(0))) {
                    notificaAmigoCercano(doc.data().usuario1,[]);
                  }
                });
            });
    }


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
                            if (!avisados.some(f => (f === friendEmail)) && kmFormat > 0 && kmFormat <= window.sessionStorage.getItem("radarDistancia")){
                                avisados.push(friendEmail);
                                podImage(friendEmail).then((image) =>{
                                    notifica("a " + kmFormat + " km de ti.", friendEmail, image)
                                });
                                
                            }
                            else
                                if(!avisados.some(f => (f === friendEmail)) && kmFormat >= 0 && kmFormat < 0.2){
                                    avisados.push(friendEmail);
                                    podImage(friendEmail).then((image) =>{
                                        notifica("posición común.", friendEmail, image);
                                    });
                                }
                        }
                    } 
                
            ); 
           
    }

    const podImage = async (friendEmail) => {
        const querySnapShot = await db.collection("users").get();
        var webId = "";
        querySnapShot.forEach(doc => {
          if (String(doc.data().pod.localeCompare(friendEmail)) === String(0)){
            webId = doc.data().pod;
          }  
        });
        var image = null;
        if (webId != "")
            image = data[webId].vcard_hasPhoto;
        return image;
    }

    
    const msg = (mensaje, friendEmail,image) => (
        <div>
        <div className="left">
        <Image src={image} defaultSrc={sinPerfil} style={{ width: "70px", high: "70px" }}/> 
        </div>
        <div className="right">
            <p style={{fontWeight:"bold", margin:"0"}}>{friendEmail}</p>
            <p style={{margin:"0"}}> {mensaje} </p>
            <p style={{margin:"0"}}> (Ver mapa) </p>
        </div>
        </div>
    )

    async function getName(webId) {
        const myDataset = await getSolidDataset(webId.slice(0, -3));
        const profile = getThing(myDataset, webId);
        const fn = getStringNoLocale(profile, FOAF.name);
        return fn;
    }

    async function notifica(mensaje, friendEmail,image){
        let friend = friendEmail;

        if (image != null){
            friend = await getName(friend).then(function (nombre){
                return nombre;
            })
        }
            console.log(friend)

        toast(msg(mensaje, friend, image), {
            position: "top-right",
            autoClose: 27000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            onClick: () => {window.location.replace("/map/" + friendEmail)}
        });
    }

    
    export {notificacionTodosAmigos};
