import { FlatList, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Color from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllData } from '../constants/Categories'
import Category from '../components/Category'
import Search from '../components/Search'
import CardList from '../components/CardList'
import axios from 'axios'
import { Api, categoryApiData } from '../constants/Api'
import MyLoader from '../components/MyLoader'
import { useSelector } from 'react-redux'

const AllDataScreens = () => {
  const a = Api()
  const selectorFilter = useSelector(data => data.filter)
  const [supir,setSupir] = useState([])
  const [user,setUser] = useState([])
  const [kendaraan,setKendaraan] = useState([])
  console.log(selectorFilter);
  
  useEffect(() => {
    axios.get('https://monitoring-api-vert.vercel.app/api/v1/supir')
    .then((response) =>setSupir(response.data)).catch((err) => console.log(err))

    axios.get('https://monitoring-api-vert.vercel.app/api/v1/user/userProfile')
    .then((response) =>setUser(response.data)).catch((err) => console.log(err))
    
    axios.get('https://monitoring-api-vert.vercel.app/api/v1/user/userProfile')
    .then((response) =>setKendaraan(response.data)).catch((err) => console.log(err))
  },[])

  const apiData = [
    {
      supir:supir,
      category: "Supir" 
    },
    {
      user:user,
      category: "User" 
    },
    {
      kendaraan:kendaraan,
      category: "Kendaraan" 
    },
  ]


  
  return (
    <View className="flex-1 p-4 h-fit w-fit"style={{backgroundColor:Color.Putih}}>
      <StatusBar/>
      <SafeAreaView>
        <Search/>
        <Category data={CategoriesAllData}/>
        <FlatList
            style={{marginTop: 5}}
            data= { apiData.filter(item => item.category === selectorFilter) }
            renderItem={
                ({item, index}) => {
                    if(selectorFilter === "Kendaraan") {
                      return (
                        <CardList data={item.kendaraan}/>
                      )
                    } else if(selectorFilter === "Supir") {
                      return (
                        <CardList data={item.supir}/>
                      )
                    } else if(selectorFilter === "User") {
                      return (
                        <CardList data={item.user}/>
                      )
                    }
                  // console.log(item.supir)
                    // if(item.nama.toLowerCase().includes(selectorSearch.toLowerCase())) {
                    // }
                        
                }
            }
        />
      </SafeAreaView>
    </View>
  )
}

export default AllDataScreens