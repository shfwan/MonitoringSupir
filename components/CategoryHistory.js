import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Color from '../constants/Color'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterHistory } from '../redux/action'

const CategoryHistory = ({select, data}) => {
    const dispatch = useDispatch()
    const [activeCategory, setActiveCategory] = useState(1)

    
    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            className="overflow-visible mt-3"
            renderItem= {
                ({item}) => {
                    isActive = item.id == activeCategory
                    const activeTextClass = isActive? 'text-white ': 'text-[#09A3BE]'
                    return (
                        <View>
                            <TouchableOpacity 
                                className="border px-5 py-2 w  mr-2 rounded-xl shadow items-center"
                                style={{backgroundColor: isActive? Color.Hijau: Color.Putih, borderColor:isActive? Color.Putih : Color.Hijau}} 
                                onPress={ () => {
                                        setActiveCategory(item.id)
                                        dispatch(setFilterHistory(item.title))
                                    }
                                }>
                                <View className="w-24">
                                    <Text style={{ textAlign:'center', fontFamily:isActive? 'semibold' : 'regular'}} className={activeTextClass}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
        />
    )
}

export default CategoryHistory