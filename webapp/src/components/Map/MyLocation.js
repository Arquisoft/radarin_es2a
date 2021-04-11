import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class MyLocation extends React.Component {
    constructor(props){
        super(props);
    
        const { lat, lng } = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
    }

    loadMap() {
        if (this.props && this.props.google) { // comprueba que google este disponible
            const { google } = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef); // elemento DOM actual
            
            let { zoom } = this.props;
            const { lat, lng } = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            
            const mapConfig = Object.assign(
                {},
                {
                  center: center,
                  zoom: zoom
                }
            );
            this.map = new maps.Map(node, mapConfig); // instancia el mapa
        }
    }

    /* Si el servidor de google no funciona correctamente o es necesario recentrar el mapa */
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google){
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    /* Se llama cuando la posicion actual cambia */
    recenterMap()   {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }

    /* Cuando el mapa esta cargado -> recuperar la ubicacion actual */
    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }
        this.loadMap();
    }

    /* Comunicar componente */
    renderChildren() {
        const { children } = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            if (!c) return;

            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation
              });
            });
    }

    render() {
        const style = Object.assign({}, mapStyles.map);

        return (
            <div>
                <div style={style} ref="map">
                    Cargando mapa...
                </div>
                {this.renderChildren()}
            </div>
        );
    }
}

export default MyLocation;
