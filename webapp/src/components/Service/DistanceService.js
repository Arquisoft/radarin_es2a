import { getDistance, getPreciseDistance } from 'geolib';



function distance(coord1,coord2) {
  var lon1 = parseFloat(coord1.lng)
  var lon2 = parseFloat(coord2.lng)
  var lat1 = parseFloat(coord1.lat)
  var lat2 = parseFloat(coord2.lat)
  var d = getPreciseDistance(
    { latitude: lat1, longitude: lon1 },
    { latitude: lat2, longitude: lon2 }
  );
  return d;
}



  

export default distance;