import * as React from "react"
import { Dimensions, View} from "react-native"
import MapView from "react-native-maps"
import Color from "../constants/Color"

const HomeScreens = () => {
  return (
    <View style={{flex:1, backgroundColor:Color.Background, alignItems:'Center', justifyContent:'center'}}>
      <MapView style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}/>
    </View>
  )
}

export default HomeScreens