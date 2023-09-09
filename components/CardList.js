import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import User from '../assets/images/User/People1.jpeg'
import Kendaraan from '../assets/images/Kendaraan/Mobil1.jpeg'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import MyLoader from './MyLoader'

const CardList = ({data}) => {
    const navigate = useNavigation()
    const selectorFilter = useSelector(data => data.filter)
    const selectorSearch = useSelector(data => data.search)
    const [item] = data
    console.log(item.user.username);
    return (
        <TouchableOpacity className="m-0.5 px-3.5 py-2.5 h-fit rounded my-1.5 bg-white" style={{elevation: 2}} onPress={() => navigate.navigate(selectorFilter, item)}>
        <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-start ">
                <Image
                    className="w-14 h-14 rounded-full"
                    source={selectorFilter === "Kendaraan" ? Kendaraan : User}
                />
                <View className="flex justify-start items-start mx-2 flex-column p-2">
                    <Text>{selectorFilter !== "Supir" ? item.user.username : item.name}</Text>
                    <Text>{selectorFilter}</Text>
                </View>
            </View>
            <IconArrowRight/>
        </View>
        {/* <MyLoader/> */}
    </TouchableOpacity>

    )
}

export default CardList