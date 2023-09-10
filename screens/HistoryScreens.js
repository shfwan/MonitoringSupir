import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllHistory } from '../constants/Categories'
import Kalender from '../components/Kalender'
import CardListHistory from '../components/CardListHistory'
import React from 'react'
import CategoryHistory from '../components/CategoryHistory'
import { dataKehadiran } from '../constants/Database'
import { Provider } from 'react-redux'
import storeState from '../redux/store'

const HistoryScreens = () => {
  return(
    <Provider store={storeState}>

      <View className="flex-1 p-4">
        <StatusBar/>
        <SafeAreaView>
          <CategoryHistory data={CategoriesAllHistory}/>
          <View className="mt-3">
            <Kalender />
            <CardListHistory data={dataKehadiran} />
          </View>
        </SafeAreaView>
      </View>
    </Provider>
  )
}

export default HistoryScreens