import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import Gambar from '../assets/images/User/People1.jpeg'
import Color from '../constants/Color'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/action'

const CardList = (props) => {
    const dispatch = useDispatch()
    const selectorFilter = useSelector(data => data.filter)
    const selectorSearch = useSelector(data => data.search)
    selectorFilter === "" ? dispatch(setFilter(props.select)) : ""

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
    const [isHidden, setHidden] = useState(false)
    // console.log(selector);
    return (
        <FlatList
            style={{marginTop: 5}}
            data= { data.filter(item => item.category === selectorFilter) }
            renderItem={
                ({item}) => {
                    if(item.nama.toLowerCase().includes(selectorSearch.toLowerCase())) {
                        return (
                            <TouchableOpacity className="px-3.5 py-2.5 h-fit rounded my-1.5 bg-white" style={{elevation: 2}}>
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center justify-start ">
                                        <Image
                                            className="w-14 h-14 rounded-full"
                                            source={Gambar}
                                        />
                                        <View className="flex justify-start items-start mx-2 flex-column p-2">
                                            <Text>{item.nama}</Text>
                                            <Text>{item.category}</Text>
                                        </View>
                                    </View>
                                    <IconArrowRight/>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    if(selectorSearch == ""){
                        item.category != "User" ? setHidden("") : setHidden("hidden")
                        return (
                            <TouchableOpacity className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white">
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center justify-start  ">
                                        <Image
                                            className="w-14 h-14 mx rounded-full"
                                            source={Gambar}
                                        />
                                        <View className="flex justify-start items-start mx-2 flex-column p-2">
                                                <Text>{item.nama}</Text>
                                                <Text className={isHidden}>{item.category}</Text>
                                        </View>
                                    </View>
                                    <IconArrowRight/>
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