import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, ICON } from '../constants/Color'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'


const AllDataScreens = () => {
  return (
    <View className="flex-1 relative"
    style={{backgroundColor:COLORS.BG}}
    >

      <StatusBar/>
      <SafeAreaView>
        {/* search bar */}
        <View className="mx-5 shadow mt-5" >
          <View className="flex-row items-center rounded-full p-1"
          style={{backgroundColor:COLORS.Putih}}
          >
            <TextInput placeholder='Cari' className="p-2 flex-1 ml-2 text-gray-700"
            style={{fontFamily:"semibold", fontSize:20}}
            />
            <TouchableOpacity
            className="rounded-full p-2"
            style={{backgroundColor:COLORS.putih}}
            >
            

            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AllDataScreens

const styles = StyleSheet.create({})