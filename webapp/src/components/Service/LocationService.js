import {db} from "../../api/firebase";



async function addUserPos (lat,lng) {
    const emailSession = window.sessionStorage.getItem("user");
        const userPos={
        email: emailSession,
        lat: lat,
        lng: lng
    };
        await db.collection("locations").
        doc(emailSession).
        set(userPos);
    }

 async function getUserPos(email) {
    var objreturn = {email:"",lat:0,lng:0};
    await db.collection("locations").
            where("email", "==", email)
            .onSnapshot(
                (querySnapshot) => {
                    querySnapshot.forEach((element) => {
                        objreturn.email = element.data.email;
                        objreturn.lat = element.data.lat;
                        objreturn.lng = element.data.lng;
                        return(objreturn);
                    });
                }
            );
}

var options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000
  };

  function error(err) {
  }

  function success(pos) {
    if (window.sessionStorage.getItem("user") !== null) {
      var crd = pos.coords;
      addUserPos(crd.latitude,crd.longitude);
    }
  }

  async function watchLocation(){
    navigator.geolocation.watchPosition(success, error, options);
  }

export {addUserPos,getUserPos, watchLocation};

