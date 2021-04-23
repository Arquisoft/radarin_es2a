function distance(coord1,coord2) {
  var lon1 = parseFloat(coord1.lng)
  var lon2 = parseFloat(coord2.lng)
  var lat1 = parseFloat(coord1.lat)
  var lat2 = parseFloat(coord2.lat)
  var R = 6371; // Radius of the earth in km
  var dLat = toRad(lat2-lat1);  // Javascript functions in radians
  var dLon = toRad(lon2-lon1); 
  console.log(coord1)
  console.log(lat2)
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function toRad(deg){
    return deg * Math.PI / 180;
  }


  

export default distance;