import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Home from '../assets/SVG/iconHome.svg'
import Color from '../constants/Color'
import Account from '../assets/SVG/iconAccount.svg'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllHistory, CategoryHistory } from '../constants/Categories'
import Category from '../components/Category'
import Search from '../components/Search'

const HistoryScreens = () => {
  
  return(
    <View>
      <StatusBar/>
      <SafeAreaView>
        {/* search bar */}
        <Search />
        {/* categories */}
        <Category data={CategoriesAllHistory}/>
      </SafeAreaView>
    </View>
  )
}

export default HistoryScreens