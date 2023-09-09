import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
const Status = (props) => {
    return (
        <View className="w-36 justify-evenly items-center flex-row rounded-lg  p-5" style={{backgroundColor:Color.Putih}}>
            {props.icon}
            <View className="items-center">
                <Text className="text-lg" style={{fontFamily:'semibold', color:Color.Hijau}}>{props.status}</Text>
                <Text className="text-lg" style={{fontFamily:'semibold'}}>{props.count}</Text>
            </View>
        </View>
    )
}

export default Status