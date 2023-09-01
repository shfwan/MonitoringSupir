import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Search from '../assets/SVG/iconSearch.svg'
import { CategoriesAllData } from '../constants/Categories'
import Category from '../components/Category'


export default function AllDataScreens () {
  
  return (
    <View className="flex-1 relative"
    style={{backgroundColor:Color.Background}}
    >
      
      <StatusBar/>
      <SafeAreaView>
        {/* search bar */}
        {/* categories */}
        <Category data={CategoriesAllData}/>
      </SafeAreaView>
    </View>
  )
}

