import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import credentials from '../api/credentials'
import MyLocation from './MyLocation'


// Propiedades por defecto de la ubicacion del usuario:
MyLocation.defaultProps = {
  zoom: 15,
  initialCenter: {
    lat: 43.355008507725366,
    lng: -5.851265172858888
  },
  centerAroundCurrentLocation: false,
  visible: true
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  // Oculta o muestra InfoWindow
    activeMarker: {},          // Muestra el marcador activo al hacer clic
    selectedPlace: {}          // Muestra la InfoWindow del lugar seleccionado sobre un marcador
  };
  
  // Evento que muestra la InfoWindow al hacer clic sobre el marcador
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  
  // Evento que cierra la InfoWindow.
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(this.props.google)
    return (
      <MyLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >

        <Marker
          onClick={this.onMarkerClick}
          name={'Nombre Apellido1 Apellido2'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </MyLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${credentials.mapsKey}`
})(MapContainer);