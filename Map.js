/*import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {MapView} from 'expo'

export default class Map extends React.Component{
    constructor(props){
        super(props);

        this.state={
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.922,
                longitudeDelta: 0.0421,

            }
        }
    }
    

    render(){
        return (
            <View >  
            <MapView
              initialRegion={this.state.region}
              showsUserLocation={true}
              showCompass={true}
              rotateEnabled={false}
              style={{flex: 1}}/>
              </View>
              );
    
            
        
        }
        }*/
        import React, { Component } from "react";
        import { Map, TileLayer } from "react-leaflet";
        import L from "leaflet";
        
        const height = { height: "100vh" };
        const center = { lat: 41.97048156848845, lng: -87.71435264451723 };
        class MapExample extends Component {
          componentDidMount() {
            const map = this.leafletMap.leafletElement;
            const geocoder = L.Control.Geocoder.nominatim();
            let marker;
        
            map.on("click", e => {
              geocoder.reverse(
                e.latlng,
                map.options.crs.scale(map.getZoom()),
                results => {
                  var r = results[0];
                  if (r) {
                    if (marker) {
                      marker
                        .setLatLng(r.center)
                        .setPopupContent(r.html || r.name)
                        .openPopup();
                    } else {
                      marker = L.marker(r.center)
                        .bindPopup(r.name)
                        .addTo(map)
                        .openPopup();
                    }
                  }
                }
              );
            });
          }
        
          render() {
            return (
              <Map
                style={height}
                center={center}
                zoom={18}
                ref={m => {
                  this.leafletMap = m;
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
              </Map>
            );
          }
        }
        
        export default MapExample;
        

       