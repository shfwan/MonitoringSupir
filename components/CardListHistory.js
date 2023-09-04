import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import Gambar from '../assets/images/User/People1.jpeg'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const CardListKehadiran = ({data}) => {
    const navigation = useNavigation()
    const selectorFilter = useSelector(data => data.filterHistory)
    const selectorCalendar = useSelector(data => data.calendar)

    const setFilter = (item) => {
        if(item.category === selectorFilter) {
            return item
        } else if(selectorFilter === "All"){
            return item
        }
    }
    return (
        <FlatList
            data= { data.filter(item => setFilter(item)) }
            renderItem={
                ({item}) => {
                    if(item.tanggal === selectorCalendar) {
                        return (
                            <TouchableOpacity 
                                className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white"
                                onPress={() => {
                                    navigation.navigate("DetailKehadiran", item)
                                }}>
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center justify-start  ">
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
                }
            }
        />
    )
}

export default CardListKehadiran