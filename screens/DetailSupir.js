import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonBack  from '../components/ButtonBack'
import Edit from '../assets/svg/iconEdit.svg'
import Delete from '../assets/svg/iconDelete.svg'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import useSWRNative, { useSWRNativeRevalidate } from '@nandorojo/swr-react-native'


const DetailSupir = () => {
  const apiUrl = "https://monitoring-api-vert.vercel.app"
  const route = useRoute()
  const [isEdit, setEdit] = React.useState(false)
  const [show, setShow] = React.useState(false)
  const [textInput, setTextInput] = React.useState({
    id: "",
    name: "",
    phoneNumber: "",
    alamat: "",
  })

  const id = route.params
  // console.log(id);
  
  axios.get(apiUrl + "/api/v1/supir/id", {data: {id: id}})
  .then((response) => {
    console.log(response.data);
    // setTextInput({...response, "name": response.data.name})
  }).catch((err) => console.log(err))
  // useEffect( () => {
  // },[id])
  // console.log(textInput);
  const handleTextInput = (text, input) => {
    text.persist()
    setTextInput(prevState => ({...prevState, [input] : text.nativeEvent.text}))
  }

  const handleOnPressSimpan = async () => {
    mutate(apiUrl + "/api/v2/supir/id", textInput)

    await axios.patch(apiUrl + "/api/v2/supir/id", textInput)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err))

    mutate(apiUrl + "/api/v1/supir")
  }


  return (
    <View className="flex-1" style={{backgroundColor:Color.Putih}}>
      <SafeAreaView className="px-3 mt-3  flex-row items-center">
        <ButtonBack/>
        <Text className="text-2xl ml-3" style={{fontFamily:'semibold', color:Color.Hijau}}>Detail Supir</Text>
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
          source={{uri: `https://monitoring-api-vert.vercel.app/assets/random/Delivery-boy.png`}}
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
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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