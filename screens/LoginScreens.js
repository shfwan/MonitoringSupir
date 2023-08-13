import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Color from '../constants/Color'
import {SafeAreaView} from 'react-native-safe-area-context'
import LogoMobil from '../assets/SVG/logoMobil.svg'
import LogoText from '../assets/SVG/logoText.svg'
import Account from '../assets/SVG/iconAccount.svg'
import Lock from '../assets/SVG/iconLock.svg'
import Eye from '../assets/SVG/IconEye.svg'
import EyeSlash from '../assets/SVG/IconEyeSlash.svg'


export const LoginScreens = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      
    >

    <View className="flex-1 bg-white"
    style={{backgroundColor:Color.Hijau, position:"relative"}}
    
    >
      <StatusBar/>
      <SafeAreaView className="flex mt-12">
      <View className="relative flex-col items-center">
        <LogoMobil/>
        <LogoText/>
      </View>
      </SafeAreaView>
    <View
    style={{borderTopLeftRadius:50, borderTopRightRadius:50}}
    className="relative flex-1 px-4 pt-8 mt-8 bg-white"
    >
      <Text style={{fontFamily:'semibold', fontSize:28}} className="text-center mt-4">Selamat Datang</Text>
      {/* Form Login */}
      <View className="form space-y-2 mt-8 ">
        {/* Username */}
        <Text style={{fontFamily:'regular', fontSize:18}} className="ml-4">Username</Text>
        <View
        className=" form flex-row p-3 pl-4 border opacity-50 mx-4 rounded-xl"
        style={{borderColor:Color.AbuAbu}}
        >
          <Account/>
          <TextInput
          className="mx-2"
          placeholder='username'
          placeholderTextColor={Color.AbuAbu}
          style={{fontFamily:'regular', fontSize:16, width:'100%'}}
          keyboardType='email-address'
          />

        
        </View>
        {/* Password */}
        <Text style={{fontFamily:'regular', fontSize:18}} className="ml-4 ">Password</Text>
        <View
        className=" form flex-row p-3 pl-4 border opacity-50 mx-4 shadow-gray-950 shadow-sm rounded-xl relative "
        style={{borderColor:Color.AbuAbu}}
        >
          <Lock/>
          <TextInput
          className="mx-2"
          placeholder='Password'
          placeholderTextColor={Color.AbuAbu}
          style={{fontFamily:'regular', fontSize:16, width:'100%', color:'#000000h'}}
          secureTextEntry={isPasswordShown}
          />
          <TouchableOpacity
          onPress={()=> setIsPasswordShown(!isPasswordShown)}
          style={{position:"absolute", right:12}}
          className="my-4"
          >
            {
              isPasswordShown == true ? ( <EyeSlash/> ) : (<Eye/>)
            }

          </TouchableOpacity>

        </View>
        <TouchableOpacity className="py-3 rounded-xl mx-4 " style={{backgroundColor:Color.Hijau}}>
          <Text style={{color:Color.Putih, fontFamily:'semibold', fontSize:18}} className="text-center">Login</Text>
        </TouchableOpacity>
        

      </View>
    </View>
    </View>
    </ScrollView>
  )
}

