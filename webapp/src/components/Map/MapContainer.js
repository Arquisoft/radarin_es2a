import React, { useState, useEffect } from "react";
import MapFriendLocation from "./MapFriendLocation";
import { db } from "../../api/firebase";
import { useParams } from "react-router";

export const MapContainer=(props) => {

  const [lat,setLat] = useState(0);
  const [lng,setLng] = useState(0);
  let { friend } = useParams();

  const loadCoords = async() => {
    db.collection("locations").onSnapshot((querySnapShot) => {
      querySnapShot.forEach(doc => {
      if(doc.data().email==friend){
        setLat(doc.data().lat);
        setLng(doc.data().lng);
      }
    })})
  }


  useEffect(() => {
    loadCoords();
}, [])




    return (
      <MapFriendLocation lat={lat} lng={lng} />
    )
}
export default MapContainer;
