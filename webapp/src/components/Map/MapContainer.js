import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Circle } from 'google-maps-react';
import credentials from '../../api/credentials'
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

const coords = { lat: 43.355008507725366, lng: -5.851265172858888 };
const coords1 = { lat: 43.357786, lng: -5.847369 };
const amigo1 = {c:coords, name:'Amigo1'};
const amigo2 = {c:coords1, name:'Amigo2'};
const amigos = [amigo1,amigo2];


export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  // Oculta o muestra InfoWindow
    activeMarker: {},          // Muestra el marcador activo al hacer clic
    selectedPlace: {}          // Muestra la InfoWindow del lugar seleccionado sobre un marcador
  };

   // Evento que muestra la InfoWindow al hacer clic sobre el circulo
   onCircleClick = (props, circle, e) =>
   this.setState({
     selectedPlace: props,
     activeMarker: circle,
     showingInfoWindow: true
   });
  
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
        {
          amigos.map((value, index) =>{
            return(<Circle
              radius={200}
              center={value.c}
              onClick={this.onCircleClick}
              strokeColor='transparent'
              strokeOpacity={0}
              strokeWeight={5}
              fillColor='#FF0000'
              fillOpacity={0.2}
              name={value.name}
            />
            )
          })
        }
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
            <h6>{this.state.selectedPlace.name}</h6>
          </div>
        </InfoWindow>
      </MyLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${credentials.mapsKey}`
})(MapContainer);