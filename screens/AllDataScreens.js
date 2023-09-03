import { Text, View } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllData } from '../constants/Categories'
import Category from '../components/Category'
import { Provider } from 'react-redux'
import storeState from '../redux/store'
import Search from '../components/Search'
import CardList from '../components/CardList'


export default function AllDataScreens () {
  
  return (
    <View className="px-5 h-fit w-fit"style={{backgroundColor:Color.Background}}>
      
      <StatusBar/>
      <SafeAreaView>
        <Provider store={storeState}>
          <Search/>
          <Category data={CategoriesAllData}/>
          <CardList select="Kendaraan"/>
        </Provider>
      </SafeAreaView>
    </View>
  )
}

