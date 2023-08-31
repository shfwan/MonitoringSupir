import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import Gambar from '../assets/images/User/People1.jpeg'

const CardList = (props) => {

    const data = [
        {nama: "shafwan", category: "Supir"},
        {nama: "ongko", category: "Supir"},
        {nama: "mingki", category: "Supir"},
        {nama: "ong", category: "Supir"},

        {nama: "ein", category: "User"},
        {nama: "ien", category: "User"},
        {nama: "risa", category: "User"},

        {nama: "fino", category: "Kendaraan"},
        {nama: "mio", category: "Kendaraan"},
        {nama: "vario", category: "Kendaraan"},
        {nama: "vega", category: "Kendaraan"},
    ]

    return (
        <FlatList
            data= { data.filter(item => item.category === props.category) }
            renderItem={
                ({item}) => {
                    if(props.search == item.nama) {
                        return (
                            <TouchableOpacity className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white">
                                <View className=" justify-start ">
                                    <View className="flex-row items-center justify-around w-fit">
                                        <Image
                                            className="w-14 h-14 rounded-full"
                                            source={Gambar}
                                        />
                                        <Text>{item.nama}</Text>
                                        <IconArrowRight/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    } else if(props.search == ""){
                        return (
                            <TouchableOpacity className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white">
                                <View className=" justify-start ">
                                    <View className="flex-row items-center justify-around w-fit">
                                        <Image
                                            className="w-14 h-14 rounded-full"
                                            source={Gambar}
                                        />
                                        <Text>{item.nama}</Text>
                                        <IconArrowRight/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            }
        />
    )
}

export default CardList