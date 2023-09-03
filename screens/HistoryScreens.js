import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Home from '../assets/svg/iconHome.svg'
import Color from '../constants/Color'
import Account from '../assets/svg/iconAccount.svg'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllHistory, CategoryHistory } from '../constants/Categories'
import Category from '../components/Category'

const HistoryScreens = () => {
  
  return(
    <View className="flex-1 bg-white">
      <StatusBar/>
      <SafeAreaView className="flex-1">
        <Category data={CategoriesAllHistory} display="none"/>
      </SafeAreaView>
    </View>
  )
}

export default HistoryScreens