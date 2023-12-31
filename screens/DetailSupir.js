import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack  from '../components/ButtonBack'
import Edit from '../assets/svg/iconEdit.svg'
import Delete from '../assets/svg/iconDelete.svg'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const DetailSupir = () => {
  const apiUrl = "https://monitoring-api-vert.vercel.app"
  const route = useRoute()
  const [isEdit, setEdit] = React.useState(false)
  const [show, setShow] = React.useState(false)
  const [textInput, setTextInput] = React.useState({
    id: route.params.id,
    name: route.params.name,
    phoneNumber: route.params.phoneNumber,
    alamat: route.params.alamat,
  })
  
  const handleTextInput = (text, input) => {
    text.persist()
    setTextInput(prevState => ({...prevState, [input] : text.nativeEvent.text}))
  }
  
  const handleOnPressSimpan = async () => {
    await axios.patch(apiUrl + "/api/v2/supir/id", textInput)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err))
  }
  
  const id = {
    id: route.params.id
  }
  const navigation = useNavigation()
  const handleOnPressRemove = async () => {
    await axios.delete(apiUrl + "/api/v2/supir/id", {data: id})
    .then((response) => {
      console.log(response.data)
      navigation.goBack()
    })
    .catch((err) => console.log(err))
  }

  const imageNull = route.params.user !== null ? {uri: `https://monitoring-api-vert.vercel.app${route.params.user.userProfile.foto}`} : require('../assets/images/no-image.jpg')

  return  (
    <View className="flex-1" style={{backgroundColor:Color.Putih}}>
      <SafeAreaView className="px-3 mt-3  flex-row items-center">
        <ButtonBack/>
        <Text className="text-2xl ml-3" style={{fontFamily:'semibold', color:Color.Hijau}}>Detail Supir</Text>
        <View className="flex-1 flex-row justify-end ">
          <View className="flex-row w-full justify-end gap-x-3">
            <TouchableOpacity
                className="rounded-xl border px-3 py-2.5 items-center justify-center"
                style={{borderColor:Color.Hijau}}
                onPress={() => {
                  setEdit(true)
                  setShow(true)
                }}>
                <Edit/>
            </TouchableOpacity>
            <TouchableOpacity
              className="rounded-xl border px-3 py-2.5 items-center justify-center"
              style={{borderColor:Color.Merah}}
              onPress= {() => handleOnPressRemove()}
              >
                <Delete/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className="items-center my-6">
        <Image
          source={imageNull}
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
                defaultValue={textInput.name}
                placeholder="Masukan nama"
                editable={isEdit}
                onChange={text => handleTextInput(text, "name")}
                />
            </View>
          </View>
          <View className="flex-col mb-6">
            <Text className="text-base" style={{fontFamily:'regular'}}>Nomor Hp</Text>
            <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
              <TextInput
                className={`text-base ${isEdit ? "text-black":"text-gray-500" }`}
                style={{fontFamily:'regular', padding:10}}
                defaultValue={textInput.phoneNumber}
                placeholder="Masukan nomor handphone"
                editable={isEdit}
                keyboardType='number-pad'
                maxLength={12}
                onChange={text => handleTextInput(text, "phoneNumber")}
              />
            </View>
          </View>
          <View className="flex-col mb-6">
            <Text className="text-base" style={{fontFamily:'regular'}}>Alamat</Text>
            <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
              <TextInput
                className={`text-base ${isEdit ? "text-black":"text-gray-500" }`}
                style={{fontFamily:'regular', padding:10}}
                placeholder="Masukan alamat"
                defaultValue={textInput.alamat}
                editable={isEdit}
                onChange={text => handleTextInput(text, "alamat")}
                />
            </View>
          </View>
          {show && (
            <TouchableOpacity 
              className="flex-1 p-3.5 rounded-lg  items-center" 
              style={{backgroundColor: Color.Hijau}} 
              onPress={() => {
                handleOnPressSimpan()
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



export default DetailSupir