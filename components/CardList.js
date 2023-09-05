import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import Gambar from '../assets/images/User/People1.jpeg'
import { useSelector } from 'react-redux'


const CardList = ({select, data}) => {
    const selectorFilter = useSelector(data => data.filter)
    const selectorSearch = useSelector(data => data.search)
    const [isHidden, setHidden] = useState(false)

    return (
        <FlatList
            style={{marginTop: 5}}
            data= { data.filter(item => item.category === selectorFilter) }
            renderItem={
                ({item, index}) => {
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
                            <TouchableOpacity key={index} className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white">
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center justify-start  ">
                                        <Image className="w-14 h-14 mx rounded-full" source={Gambar} />
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