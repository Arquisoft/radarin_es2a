function distance(coord1,coord2) {
  var lon1 = coord1.lon
  var lon2 = coord2.lon
  var lat1 = coord1.lon
  var lat2 = coord2.lat
  var R = 6371; // Radius of the earth in km
  var dLat = toRad(lat2-lat1);  // Javascript functions in radians
  var dLon = toRad(lon2-lon1); 
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