import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import SearchIcon from '../assets/SVG/iconSearch.svg'
import React, { useState, useEffect } from 'react'
import Color from '../constants/Color'


const Search = () => {
    const [textInput, setTextInput] = useState("")
    return (
        <View className="mx-5 shadow-md mt-5" >
            <View 
                className="flex-row shadow-lg items-center rounded-full p-1"
                style={{backgroundColor:Color.Putih}} >
                <TextInput 
                    className="p-2 flex-1 ml-2 text-gray-600"
                    placeholder='Cari' 
                    value={textInput}
                    onChangeText={(text) => setTextInput(text)}
                    style={{fontFamily:"regular", fontSize:16}} />
                <TouchableOpacity
                    className="rounded-full p-2 mr-2"
                    style={{backgroundColor:Color.Hijau}} >
                    <SearchIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search