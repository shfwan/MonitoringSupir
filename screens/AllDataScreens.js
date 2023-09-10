import { FlatList, View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllData } from '../constants/Categories'
import Category from '../components/Category'
import Search from '../components/Search'
import ApiCard from '../constants/ApiCard'
import { useSelector } from 'react-redux'

const AllDataScreens = () => {


  const filter = () => {
    const selectorFilter = useSelector(data => data.filter)
    if (selectorFilter === "Kendaraan") {
      return <ApiCard method="GET" route="/api/v1/supir"/>
    } else if (selectorFilter === "Supir") {
      return <ApiCard method="GET" route="/api/v1/supir"/>
    } else if (selectorFilter === "User") {
      return <ApiCard method="GET" route="/api/v1/userProfile"/>
    }
  }
  return (
    <View className="flex-1 p-4 h-fit w-fit"style={{backgroundColor:Color.Putih}}>
      <StatusBar/>
      <SafeAreaView>
        <Search/>
        <Category data={CategoriesAllData}/>
        {/* <FlatList
            style={{marginTop: 5}}
            data= { [] }
            renderItem={
                ({item, index}) => {
                    console.log(item.name)
                    if(selectorFilter === "Kendaraan") {
                      return (
                        <CardList data={item}/>
                      )
                    } 
                  // console.log(item.supir)
                    // if(item.nama.toLowerCase().includes(selectorSearch.toLowerCase())) {
                    // }
                        
                }
            }
        /> */}
      </SafeAreaView>
      <View className="flex-1 justify-center">
        {filter()}
      </View>
    </View>
  )
}

export default AllDataScreens