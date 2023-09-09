import React, {useState} from "react"
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import Color from "../constants/Color"
import Menu from '../assets/svg/iconMenu.svg'
import { SafeAreaView } from "react-native-safe-area-context"
import  Modal  from "react-native-modal"
import Car from '../assets/svg/iconCar.svg'
import { style } from "../theme/Index.Theme"
import Right from '../assets/svg/iconArrowRight.svg'

const HomeScreens = () => {
  return (
    <View style={{flex:1, backgroundColor:Color.Background}}>
      <MapView
      initialRegion={{"latitude": -3.6986581592589007, "latitudeDelta": 0.0002787032991031779, "longitude": 128.18019339814782, "longitudeDelta": 0.0004462525248527527}}
      style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}></MapView>
        <TouchableOpacity className="ml-5 mt-10 absolute w-12 h-12 rounded-xl items-center justify-center" style={{backgroundColor:Color.Putih, elevation:3 }} >
          <Menu className="items-center justify-center"/>
        </TouchableOpacity>
        <View className="absolute bottom-0 flex-end h-96 w-full" style={{backgroundColor:Color.Putih, elevation:4, borderTopLeftRadius:45, borderTopRightRadius:45}}>
          <View className="justify-center mx-36 p-1 rounded-xl items-center mt-3 " style={{backgroundColor:'#09A3BE33', borderColor:"#09A3BE"}}>
            <Car stroke={Color.Hijau}/>
          </View>
          <Text className="ml-5 py-2 text-2xl" style={{color:Color.Hitam, fontFamily:'semibold'}}>Kendaraan</Text>
          <ScrollView
          className="mb-20"
          showsVerticalScrollIndicator={false}
          >
          <TouchableOpacity className="flex-row mx-5 items-center p-2 rounded-lg justify-between" style={{backgroundColor:Color.Putih, elevation:2}}>
            <Image source={require('../assets/images/Kendaraan/Mobil1.jpeg')}
            style={{height:65, width:65}}
            className="rounded-full"
            />
            <View className="flex-col ">
              <Text className="text-xl" style={{color:Color.Hijau, fontFamily:'semibold'}}>Avanza</Text>
              <Text className="text-base" style={{color:Color.AbuAbu, fontFamily:'semibold'}}>DE 1234 XX</Text>
            </View>
            <Right/>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row my-5 mx-5 items-center p-2 rounded-lg justify-between" style={{backgroundColor:Color.Putih, elevation:2}}>
            <Image source={require('../assets/images/Kendaraan/Mobil2.jpeg')}
            style={{height:65, width:65}}
            className="rounded-full"
            />
            <View className="flex-col ">
              <Text className="text-xl" style={{color:Color.Hijau, fontFamily:'semibold'}}>Toyota</Text>
              <Text className="text-base" style={{color:Color.AbuAbu, fontFamily:'semibold'}}>DE 5678 XX</Text>
            </View>
            <Right/>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row mb-5 mx-5 items-center p-2 rounded-lg justify-between" style={{backgroundColor:Color.Putih, elevation:2}}>
            <Image source={require('../assets/images/Kendaraan/Mobil3.jpeg')}
            style={{height:65, width:65}}
            className="rounded-full"
            />
            <View className="flex-col ">
              <Text className="text-xl" style={{color:Color.Hijau, fontFamily:'semibold'}}>Hyundai</Text>
              <Text className="text-base" style={{color:Color.AbuAbu, fontFamily:'semibold'}}>DE 9012 XX</Text>
            </View>
              <Right/>
          </TouchableOpacity>
          </ScrollView>
        </View>

    </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
  modal:{
    bottom:0,
    margin:0
  },
  modalContent:{
    width:'100%',
    backgroundColor:Color.Hijau,
    paddingTop:12,
    paddingHorizontal:12,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    maxHeight:300,
    minHeight:200,
    paddingBottom:20
  },
  center:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  // barIcon:{
  //   width:60,
  //   height:5,
  //   backgroundColor:'#bbb',
  //   borderRadius:3
  // }
})