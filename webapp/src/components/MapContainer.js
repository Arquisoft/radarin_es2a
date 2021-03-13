import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import credentials from '../api/credentials'
import CurrentLocation from './Map'




//--------------------------------------------


const mapStyles = {
  width: '500px',
  height: '500px'
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  //-----------Eventos de Marcador e Informacion --------------


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

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
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        styles={mapStyles}
      >

        <Marker
          onClick={this.onMarkerClick}
          name={'Escuela de Ingenieria Informatica'}
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
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${credentials.mapsKey}`
})(MapContainer);