import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { useDispatch } from 'react-redux'

const TextInputData = (prop) => {
    const dispatch = useDispatch()
    return (
        <View className="flex-col mb-6">
            <Text className="text-base" style={{fontFamily:'regular'}}>{prop.title}</Text>
            <View className="rounded-md w-full my-2 h-11 justify-center pl-2" style={{backgroundColor:Color.AbuMuda}}>
            <TextInput
                className={`text-base ${prop.edit ? "text-black":"text-gray-500" }`}
                style={{fontFamily:'regular', padding:10}}
                defaultValue={prop.defaultValue}
                
                placeholder="Masukan nama"
                editable={prop.edit}/>
            </View>
        </View>
    )
}

export default TextInputData