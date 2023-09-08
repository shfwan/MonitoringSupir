import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import User from '../assets/images/User/People2.jpeg'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setCountNotif } from '../redux/action'

const CardNotif = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const selector = useSelector(item => item.countNotif)
  const [isDispatch, setDispatch] = React.useState(selector)
  const [isClick, setClick] = React.useState(true)
  dispatch(setCountNotif(isDispatch))
  console.log(isDispatch - 1);

  return (
    <TouchableOpacity 
      className="mx-0.5 my-1 p-3.5 rounded-md justify-center" 
      style={{backgroundColor: isClick ? Color.Hijau : Color.Putih, elevation: 3}}
      onPress={() => {
        navigation.navigate('Kehadiran', [])
        setClick(false)
        setDispatch(isDispatch - 1)
        dispatch(setCountNotif(isDispatch))
      }}>
        <View className="flex-row items-center gap-x-5">
            <Image
                className="w-14 h-14 rounded-full"
                source={User}/>
            <Text className="text-base" style={{color: isClick ? Color.Putih : "#000"}}>{props.nama} Telah Hadir</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CardNotif