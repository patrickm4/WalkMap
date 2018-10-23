import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { MapView } from 'expo';

export default class App extends React.Component {

  state = {
    InitialPosition: {
      latitude: 49.2485,
      longitude: -123.0014,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },

    markerPosition :{
      latitude: 49.2567,
      longitude: -123.0073
    }
  }

  componentMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{height:200}}
          >
          <TextInput
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
            placeholder="Destination"
            underlineColorAndroid='transparent'
            />
        </View>
      <MapView
        style={styles.map}
        initialRegion={this.state.InitialPosition}
      >
        <MapView.Marker
          coordinate={this.state.markerPosition}
          />
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   ...StyleSheet.absoluteFillObject,
   flex: 1,
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
 },
 map: {
   //...StyleSheet.absoluteFillObject,
   //position: 'absolute',
   //bottom: 0,
   //justifyContent: 'flex-end',
   height: 400,
   width: 400,
 },
});
