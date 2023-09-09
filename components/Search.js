import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/action'
import SearchIcon from '../assets/svg/iconSearch.svg'


const Search = () => {
    const dispatch = useDispatch()
    return (
        <View 
            className="flex-row items-center rounded-full p-1"
            style={{backgroundColor:Color.Putih, elevation: 3}} >
            <TextInput 
                className="p-2 flex-1 ml-2 text-gray-600"
                placeholder='Cari' 
                onChangeText={(text) => dispatch(setSearch(text))}
                style={{fontFamily:"regular", fontSize:16}} />
            <TouchableOpacity
                className="rounded-full p-2 mr-2"
                style={{backgroundColor:Color.Hijau}} >
                <SearchIcon />
            </TouchableOpacity>
        </View>
    )
}

export default Search