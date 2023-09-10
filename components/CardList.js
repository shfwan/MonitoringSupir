import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const CardList = (prop) => {
    const navigate = useNavigation()
    const selectorFilter = useSelector(data => data.filter)
    const imageNull = prop.item.user !== null ? {uri: `https://monitoring-api-vert.vercel.app${prop.item.user.userProfile.foto}`} : require('../assets/images/no-image.jpg')
    return (
        <TouchableOpacity className="m-0.5 px-3.5 py-2.5 h-fit w-full  rounded my-1.5 bg-white" style={{elevation: 2}} key={prop.item.id} onPress={() => navigate.navigate(selectorFilter, prop.item.id)}>
            <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center justify-start ">
                        <Image
                            className="w-14 h-14 rounded-full"
                            // src={}
                            source={imageNull}
                        />
                        <View className="flex justify-start items-start mx-2 flex-column p-2">
                            <Text>{prop.item.name}</Text>
                            <Text>{prop.item.phoneNumber}</Text>
                        </View>
                    </View>
                    <IconArrowRight/>
                </View>
        </TouchableOpacity>
    )
}

export default CardList