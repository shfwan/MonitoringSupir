import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import IconArrowRight from '../assets/svg/iconArrowRight.svg'
import Gambar from '../assets/images/User/People1.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/action'

const CardListKehadiran = ({select, data}) => {
    const dispatch = useDispatch()
    const selectorFilter = useSelector(data => data.filter)
    const selectorCalendar = useSelector(data => data.calendar)
    selectorFilter === "" ? dispatch(setFilter(select)) : ""
    return (
        <FlatList
            data= { data.filter(item => item.category === selectorFilter) }
            renderItem={
                ({item}) => {
                    if(item.tanggal === selectorCalendar) {
                        return (
                            <TouchableOpacity className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white" >
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