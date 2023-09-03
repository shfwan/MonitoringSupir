import { View, Text, ScrollView , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { ButtonBack } from '../components/ButtonBack'
import { SafeAreaView } from 'react-native-safe-area-context'
import Phone from '../assets/SVG/iconPhone.svg'
import Alamat from '../assets/SVG/iconAlamat.svg'
import Email from '../assets/SVG/iconEmail.svg'
import Hadir from '../assets/SVG/iconHadir.svg'
import Izin from '../assets/SVG/iconIzin.svg'
import Sakit from '../assets/SVG/iconSakit.svg'
import Terlambat from '../assets/SVG/iconWaktu.svg'

const DetailUser = () => {
  return (
        <View className="flex-1"
        style={{backgroundColor:Color.Putih}}
        >
        <SafeAreaView className="flex mt-12 mb-10 px-4">
            <TouchableOpacity>
                <ButtonBack/>
            </TouchableOpacity>
        </SafeAreaView>
        <View style={{borderTopLeftRadius:50, borderTopRightRadius:50, backgroundColor:Color.Hijau}}
        className="flex-1 px-6 pt-8 mt-8"
        >
            <View className="items-center justify-center">
            <Image source={require("../assets/images/User/People1.jpeg")}
            style={{height:170, width:170, borderRadius:85, borderWidth:4, borderColor:Color.Putih, marginTop:-100}}
            />
            <Text className="text-2xl mt-3" style={{fontFamily:'regular', color:Color.Putih}}>Ali Putuhena</Text>
            </View>
            <View>
                <View className="flex-row items-center gap-3 mt-3">
                    <Phone stroke={Color.Putih}/>
                    <Text className="text-xl " style={{fontFamily:'semibold', color:Color.Putih}}>08123456789</Text>
                </View>
                <View className="flex-row items-center gap-3 mt-3">
                    <Alamat stroke={Color.Putih}/>
                    <Text className="text-xl " style={{fontFamily:'semibold', color:Color.Putih}}>Galunggung</Text>
                </View>
                <View className="flex-row items-center gap-3 mt-3">
                    <Email stroke={Color.Putih}/>
                    <Text className="text-xl " style={{fontFamily:'semibold', color:Color.Putih}}>aliputuhena@gmail.com</Text>
                </View>
            </View>
            <View className="mt-5">
            <View className="flex-row mb-3">
                <Text className="text-xl" style={{color:Color.Putih}}>Absensi bulan</Text>
                <Text className="text-xl"style={{color:Color.Hitam, fontFamily:'semibold'}}> Juli</Text> 
                <Text className="text-xl" style={{color:Color.Putih ,fontFamily:'semibold'}}> 2023</Text>

            </View>
            <View className="flex-row justify-between">
            <View className="w-40 justify-evenly items-center flex-row rounded-md p-5" style={{backgroundColor:Color.Putih}}>
                <Hadir/>
                <View className="items-center">
                    <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Hadir</Text>
                    <Text className="text-xl" style={{fontFamily:'semibold'}}>15</Text>
                </View>
            </View>
            <View className="w-40 justify-evenly items-center flex-row rounded-md p-5" style={{backgroundColor:Color.Putih}}>
                <Izin/>
                <View className="items-center">
                    <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Izin</Text>
                    <Text className="text-xl" style={{fontFamily:'semibold'}}>1</Text>
                </View>
            </View>
            </View>
            <View className="flex-row justify-between mt-5">
            <View className="w-40 justify-evenly items-center flex-row rounded-md p-5" style={{backgroundColor:Color.Putih}}>
                <Sakit/>
                <View className="items-center">
                    <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Sakit</Text>
                    <Text className="text-xl" style={{fontFamily:'semibold'}}>3</Text>
                </View>
            </View>
            <View className="w-40 justify-evenly items-center flex-row rounded-md p-5" style={{backgroundColor:Color.Putih}}>
                <Terlambat/>
                <View className="items-center">
                    <Text className="text-xl" style={{fontFamily:'semibold', color:Color.Hijau}}>Terlambat</Text>
                    <Text className="text-xl" style={{fontFamily:'semibold'}}>10</Text>
                </View>
            </View>
            </View>
            </View>

        </View>

        </View>
  )
}

export default DetailUser