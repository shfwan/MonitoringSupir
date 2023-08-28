import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Home from '../assets/SVG/iconHome.svg'
import Color from '../constants/Color'
import Account from '../assets/SVG/iconAccount.svg'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoryHistory } from '../constants/Categories'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const HistoryScreens = () => {
  const [currentSelected, setCurrentSelected] = useState([1])
  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
      activeOpacity={0.9}
      onPress={()=>setCurrentSelected(index)}
      style={{backgroundColor:currentSelected ? Color.Hijau : Color.Putih, borderColor:currentSelected? Color.Putih : Color.Hijau}}
      className="border p-3 px-2 mr-2 rounded-xl shadow items-center"
      >
          <Text style={{width:wp(24), height:wp(4), textAlign:'center', fontFamily:currentSelected? 'semibold' : 'regular', color: currentSelected? Color.Putih : Color.Hijau}}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  const renderItems = ({data, index}) => {
    return (
      <TouchableOpacity
      key={index}
      activeOpacity={0.9}
      style={{
        width:'100%',
        height: 10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Color.Putih
      }}
      ><View style={{marginBottom:50}}>
        <Image
        style={{
          height:50,
          width:50
        }}
        ></Image>

      </View>

      </TouchableOpacity>
    )
  }
  return (
    <View className="flex-1 relative"
    style={{backgroundColor:Color.Background}}
    >
      <StatusBar/>
      <SafeAreaView className="mt-2">
        <Text className="text-center text-xl" style={{color:Color.Hijau, fontFamily:'semibold'}}>Riwayat Kehadiran</Text>
        <View className="px-5 mt-4">
        <FlatList 
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
        data={CategoryHistory}
        renderItem={renderCategories}
        />
        {CategoryHistory[currentSelected].items.map(renderItems)}
        </View>
      </SafeAreaView>
      
    </View>
  )
}

export default HistoryScreens