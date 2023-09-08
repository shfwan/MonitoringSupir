import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack from '../components/ButtonBack'
import Edit from '../assets/svg/iconEdit.svg'
import Delete from '../assets/svg/iconDelete.svg'
import { useRoute } from '@react-navigation/native'

const DetailKendaraan = () => {
  const route = useRoute()
  const [isEdit, setEdit] = React.useState(false)
  const [show, setShow] = React.useState(false)

  return (
    <View className="flex-1" style={{backgroundColor:Color.Putih}}>
      <SafeAreaView className="px-3 mt-3  flex-row items-center">
        <ButtonBack/>
        <Text className="text-2xl ml-3" style={{fontFamily:'semibold', color:Color.Hijau}}>Detail User</Text>
        <View className="flex-1 flex-row justify-end ">
          <View className="flex-row w-full justify-end gap-x-3">
            <TouchableOpacity
                className="rounded-xl"
                style={{borderColor:Color.Hijau, borderWidth:1, height:45, width:45, alignItems:'center', justifyContent:'center'}}
                onPress={() => {
                  setEdit(true)
                  setShow(true)

                }}>
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
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className="items-center my-6">
        <Image
          source={require('../assets/images/Kendaraan/Mobil3.jpeg')}
          style={{
              height:170,
              width:170,
              borderRadius:85,
              borderWidth:4,
              borderColor:Color.Hijau
          }}/>
        </View>
        <View className="mx-5">
          <View className="flex-col mb-6">
            <Text className="text-base" style={{fontFamily:'regular'}}>Nama Lengkap</Text>
            <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
              <TextInput
                className={`text-base ${isEdit ? "text-black":"text-gray-500" }`}
                style={{fontFamily:'regular', padding:10}}
                value={route.params.nama}
                editable={isEdit} />
            </View>
          </View>
          <View className="flex-col mb-6">
            <Text className="text-base" style={{fontFamily:'regular'}}>Nomor Hp</Text>
            <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
              <TextInput
                className={`text-base ${isEdit ? "text-black":"text-gray-500" }`}
                style={{fontFamily:'regular', padding:10}}
                value={route.params.nomorHp}
                editable={isEdit}/>
            </View>
          </View>
          <View className="flex-col mb-6">
            <Text className="text-base" style={{fontFamily:'regular'}}>Alamat</Text>
            <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
              <TextInput
                className={`text-base ${isEdit ? "text-black":"text-gray-500" }`}
                style={{fontFamily:'regular', padding:10}}
                value={route.params.alamat}
                editable={isEdit}/>
            </View>
          </View>
          {show && (
            <TouchableOpacity 
              className="flex-1 p-3.5 rounded-lg  items-center" 
              style={{backgroundColor: Color.Hijau}} 
              onPress={() => {
                setEdit(false)
                setShow(false)
              }}>
              <Text className="text-white text-lg" style={{fontFamily:'semibold'}}>Simpan</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailKendaraan