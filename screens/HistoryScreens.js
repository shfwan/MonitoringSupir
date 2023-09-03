import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Home from '../assets/svg/iconHome.svg'
import Color from '../constants/Color'
import Account from '../assets/svg/iconAccount.svg'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllHistory, CategoryHistory } from '../constants/Categories'
import Category from '../components/Category'
import { Provider } from 'react-redux'
import storeState from '../redux/store'
import Kalender from '../components/Kalender'
// import { }

const HistoryScreens = () => {
  
  return(
    <View className="flex-1 bg-white">
      <StatusBar/>
      <SafeAreaView>
        <Provider store={storeState}>
          <Category data={CategoriesAllHistory} display="none"/>
          <View className="">
            <Kalender />
          </View>
        </Provider>
      </SafeAreaView>
    </View>
  )
}

export default HistoryScreens