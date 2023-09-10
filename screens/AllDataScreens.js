import { View } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllData } from '../constants/Categories'
import Category from '../components/Category'
import Search from '../components/Search'
import ApiCard from '../constants/ApiCard'
import { Provider } from 'react-redux'
import storeState from '../redux/store'
import  { SWRConfig } from 'swr'

const AllDataScreens = () => {
  return (
    <Provider store={storeState}>
      <View className="flex-1 p-4 h-fit w-fit"style={{backgroundColor:Color.Putih}}>
        <StatusBar/>
        <SafeAreaView>
          <Search/>
          <Category data={CategoriesAllData}/>
        </SafeAreaView>
        <SWRConfig
          value={
            {
              fetcher: (...args) => fetch(...args).then(res => res.json()),
              
            }
          }
        >
          <View className="flex-1 mt-2 justify-center">
            <ApiCard/>
          </View>
        </SWRConfig>
      </View>
    </Provider>
  )
}

export default AllDataScreens