import * as React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import Color from "../constants/Color"

const HomeScreens = () => {
  return (
    <View style={{flex:1, backgroundColor:Color.Background, alignItems:'Center', justifyContent:'center'}}>
      <MapView style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}/>
    </View>
  )
}

export default HomeScreens