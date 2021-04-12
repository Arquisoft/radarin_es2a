import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';
import credentials from '../../api/credentials'
import { Fragment } from 'react';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};



const options = {
  styles: mapStyles,
};

function MapFriendLocation(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${credentials.mapsKey}`,
  });
  console.log("Por favor")
  console.log(props.lat)

  const center = {
    lat: props.lat,
    lng: props.lng,
  };

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div className="App">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={options}
      >
      <Fragment>
      <Marker
        position={center}
      />
      </Fragment>
      </GoogleMap>
    </div>
  );
}

export default MapFriendLocation;