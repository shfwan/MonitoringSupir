import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import ArrowLeft from '../assets/svg/iconArrowLeft.svg'
import Color from '../constants/Color'
import { useNavigation } from '@react-navigation/native'
import { style } from '../theme/Index.Theme'


const ButtonBack = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.goBack() }} activeOpacity={1} >
            <View className="px-5 py-3 rounded-xl bg-white " style={{elevation: 5}}>
                <ArrowLeft stroke={Color.Hijau}/>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonBack