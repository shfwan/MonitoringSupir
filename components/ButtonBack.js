import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import ArrowLeft from '../assets/svg/iconArrowLeft.svg'
import Color from '../constants/Color'
import { useNavigation } from '@react-navigation/native'


const ButtonBack = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity className="px-4 py-2 rounded-xl bg-white " style={{elevation: 3}} onPress={() => { navigation.goBack() }} activeOpacity={1} >
            <ArrowLeft stroke={Color.Hijau}/>
        </TouchableOpacity>
    )
}

export default ButtonBack