/* tslint:disable */

import React from 'react';
import L from 'leaflet';
import './BaseMap.css'

class BaseMap extends React.Component {
    map!: L.Map;
    marker!: L.Marker<any>;
    layer!: L.LayerGroup<any>;

    componentDidMount() {
        // create map
        this.map = L.map('leaflet-container', {
            center: [49.8419, 24.0315],
            zoom: 16,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });

        this.map.on('move click', () => {
            console.log('about to resize')
            window.dispatchEvent(new Event('resize'));
        });

        this.marker = L.marker([49.8419, 24.0315])
        this.layer = L.layerGroup().addTo(this.map);
        // this.updateMarkers([49.8419, 24.0315]);
    }

    // componentDidUpdate({ markerPosition }) {
    //     // check if position has changed 
    //     if (this.props.markerPosition !== markerPosition) {
    //         this.marker.setLatLng([49.8419, 24.0315]);
    //     }
    // }

    // updateMarkers(markersData) {
    //     this.layer.clearLayers();
    //     markersData.forEach(marker => {
    //         L.marker(
    //             marker.latLng,
    //             { title: marker.title }
    //         ).addTo(this.layer);
    //     });
    // }

    render() {
        return <div id="leaflet-container"></div>
    }
}

export default BaseMap;