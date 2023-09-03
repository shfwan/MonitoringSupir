import { Text, View } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllData } from '../constants/Categories'
import Category from '../components/Category'


export default function AllDataScreens () {
  
  return (
    <View className="flex-1"style={{backgroundColor:Color.Background}}>
      
      <StatusBar/>
      <SafeAreaView>
        <Category data={CategoriesAllData} Kalender="none"/>
      </SafeAreaView>
    </View>
  )
}

