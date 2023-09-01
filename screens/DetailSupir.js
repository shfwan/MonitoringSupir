import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonBack } from '../components/ButtonBack'
import Edit from '../assets/SVG/iconEdit.svg'
import Delete from '../assets/SVG/iconDelete.svg'

const DetailSupir = () => {
  return (
    <View className="flex-1" style={{backgroundColor:Color.Putih}}>
      <SafeAreaView className="flex-1 px-1" style={{backgroundColor:Color.Putih}}>
        <View className="flex-row justify-between mt-3 px-1">
        <TouchableOpacity>
          <ButtonBack/>
        </TouchableOpacity>
        <View className="flex-row mr-5 gap-3">
        <TouchableOpacity
        className="rounded-xl"
        style={{borderColor:Color.Hijau, borderWidth:1, height:45, width:45, alignItems:'center', justifyContent:'center'}}
        >
          <Edit/>
        </TouchableOpacity>
        <TouchableOpacity
        className="rounded-xl"
        style={{borderColor:Color.Merah, borderWidth:1, height:45, width:45, alignItems:'center', justifyContent:'center'}}
        >
          <Delete/>
        </TouchableOpacity>
        </View>
        </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <View className="items-center my-6">
      <Image
        source={require('../assets/images/Supir/People1.jpeg')}
        style={{
            height:170,
            width:170,
            borderRadius:85,
            borderWidth:4,
            borderColor:Color.Hijau
        }}
        />
      </View>
      <View className="mx-5">
        <View className="flex-col mb-6">
          <Text className="text-base" style={{fontFamily:'regular'}}>Nama Lengkap</Text>
          <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
            <TextInput
            style={{fontFamily:'regular', color:Color.Hitam, padding:10}}
            className="text-base"
            value='Shafwan Masyukur Nurlette'
            editable={false}
            />
          </View>
        </View>
        <View className="flex-col mb-6">
          <Text className="text-base" style={{fontFamily:'regular'}}>NIK/NIP</Text>
          <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
            <TextInput
            style={{fontFamily:'regular', color:Color.Hitam, padding:10}}
            className="text-base"
            value='200101139'
            editable={false}
            />
          </View>
        </View>
        <View className="flex-col mb-6">
          <Text className="text-base" style={{fontFamily:'regular'}}>E-mail</Text>
          <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
            <TextInput
            style={{fontFamily:'regular', color:Color.Hitam, padding:10}}
            className="text-base"
            value='shfwan367@gmail.com'
            editable={false}
            />
          </View>
        </View>
        <View className="flex-col mb-6">
          <Text className="text-base" style={{fontFamily:'regular'}}>Nomor Hp</Text>
          <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
            <TextInput
            style={{fontFamily:'regular', color:Color.Hitam, padding:10}}
            className="text-base"
            value='08123456789'
            editable={false}
            />
          </View>
        </View>
        <View className="flex-col mb-6">
          <Text className="text-base" style={{fontFamily:'regular'}}>Alamat</Text>
          <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
            <TextInput
            style={{fontFamily:'regular', color:Color.Hitam, padding:10}}
            className="text-base"
            value='Galunggung'
            editable={false}
            />
          </View>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default DetailSupir