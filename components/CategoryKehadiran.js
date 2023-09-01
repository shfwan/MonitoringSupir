import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import SearchIcon from '../assets/SVG/iconSearch.svg'
import { TouchableOpacity } from 'react-native'

import Color from '../constants/Color'
import CardList from './CardList'
import Calendar from './Calendar'

const Category = (props) => {
    const [itemSelect] = props.data
    const [textInput, setTextInput] = useState("")
    const [activeCategory, setActiveCategory] = useState(1)
    const [filter, setFilter] = useState(itemSelect.title)

    
    return (
        <View className="px-5 mt-5">
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.data}
                keyExtractor={item => item.id}
                className="overflow-visible mt-3"
                renderItem= {
                    ({item}) => {
                        isActive = item.id == activeCategory;
                        let activeTextClass = isActive? 'text-white ': 'text-[#09A3BE]';
                        
                        return (
                            <View>
                                <TouchableOpacity 
                                onPress={ ()=> {
                                        setActiveCategory(item.id)
                                        setFilter(item.title)
                                    }
                                }
                                style={{backgroundColor: isActive? Color.Hijau: Color.Putih, borderColor:isActive? Color.Putih : Color.Hijau}} 
                                className="border px-5 py-2 w  mr-2 rounded-xl shadow items-center" >
                                    <View className="w-24">
                                        <Text style={{ textAlign:'center', fontFamily:isActive? 'semibold' : 'regular'}} className={activeTextClass}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
            />
            <Calendar/>
            
            <CardList category={filter} search={textInput}/>

        </View>
    )
}

export default Category