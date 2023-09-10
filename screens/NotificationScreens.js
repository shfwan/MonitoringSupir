import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import CardNotif from '../components/CardNotif'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { dataKehadiran } from '../constants/Database'
import Color from '../constants/Color'

const NotificationScreens = () => {

  return (
    <View className="flex-1 px-4">
      {/* <StatusBar/> */}
      {/* <SafeAreaView>
        <ScrollView className=" h-fit overflow-y-hidden" showsVerticalScrollIndicator={false}>
          {/* <Vir/> */}
          {/* <FlatList
            data={dataKehadiran}
            renderItem={
              ({item}) => {
                return (
                  <View>
                    <View className="items-center mb-1 mt-4">
                      <Text className="text-sm" style={{color: Color.AbuAbu, fontFamily:'semibold'}}>{item.tanggal}</Text>
                    </View>
                    <FlatList
                      data={dataKehadiran.filter(data => data.tanggal === item.tanggal)}
                      scrollEnabled={false}
                      renderItem={
                        ({item}) => {
                          return (
                            <CardNotif nama={item.nama}/>
                          )
                        }
                      }
                    />
                  </View>
                )
              }
            }
          />
        </ScrollView> */}
      {/* </SafeAreaView> */} 
    </View>
  )
}

export default NotificationScreens