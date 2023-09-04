import { Text, View } from 'react-native'
import React, {useState} from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllData } from '../constants/Categories'
import Category from '../components/Category'
import { Provider } from 'react-redux'
import storeState from '../redux/store'
import Search from '../components/Search'
import CardList from '../components/CardList'
import { useFocusEffect, } from '@react-navigation/native'
import { setFilter } from '../redux/action'

const AllDataScreens = () => {
  const data = [
    {nama: "shafwan", category: "Supir"},
    {nama: "ongko", category: "Supir"},
    {nama: "mingki", category: "Supir"},
    {nama: "ong", category: "Supir"},

    {nama: "ein", category: "User"},
    {nama: "ien", category: "User"},
    {nama: "risa", category: "User"},

    {nama: "fino", category: "Kendaraan"},
    {nama: "mio", category: "Kendaraan"},
    {nama: "vario", category: "Kendaraan"},
    {nama: "vega", category: "Kendaraan"},
  ]
  // const dispatch = useDispatch()
  const [select, isSelected] = useState("")
  useFocusEffect(React.useCallback(() => {
    isSelected("Kendaraan")
    // dispatch(setFilter("Kendaraan"))
  }))
  
  return (
    <View className="p-4 h-fit w-fit"style={{backgroundColor:Color.Background}}>
      
      <StatusBar/>
      <SafeAreaView>
        <Provider store={storeState}>
          <Search/>
          <Category select="Kendaraan" data={CategoriesAllData}/>
          <CardList select={select} data={data}/>
        </Provider>
      </SafeAreaView>
    </View>
  )
}

export default AllDataScreens