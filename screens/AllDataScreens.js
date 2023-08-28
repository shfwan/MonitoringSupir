import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from '../assets/SVG/iconSearch.svg'
import { CategoriesAllData } from '../constants/Categories'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function AllDataScreens () {
  const [activeCategory, setActiveCategory] = useState(1)
  return (
    <View className="flex-1 relative"
    style={{backgroundColor:Color.Background}}
    >

      <StatusBar/>
      <SafeAreaView>
        {/* search bar */}
        <View className="mx-5 shadow-md mt-5" >
          <View className="flex-row shadow-lg items-center rounded-full p-1"
          style={{backgroundColor:Color.Putih}}
          >
            <TextInput placeholder='Cari' className="p-2 flex-1 ml-2 text-gray-600"
            style={{fontFamily:"regular", fontSize:16}}
            />
            <TouchableOpacity
            className="rounded-full p-2 mr-2"
            style={{backgroundColor:Color.Hijau}}
            >
            <Search />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        <View className="px-5 mt-4">
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoriesAllData}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{
              isActive = item.id==activeCategory;
              let activeTextClass = isActive? 'text-white ': 'text-[#09A3BE]';
              return (
                <TouchableOpacity 
                onPress={()=> setActiveCategory(item.id)}
                style={{backgroundColor: isActive? Color.Hijau: Color.Putih, borderColor:isActive? Color.Putih : Color.Hijau}} 
                className="border p-3 px-2 mr-2 rounded-xl shadow items-center" >
                  <Text style={{width:wp(24), height:wp(4), textAlign:'center', fontFamily:isActive? 'semibold' : 'regular'}} className={activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

