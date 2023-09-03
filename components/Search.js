import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../redux/action'
import SearchIcon from '../assets/svg/iconSearch.svg'


const Search = () => {
    const dispatch = useDispatch()
    const selector = useSelector(data => data.search)
    return (
        <View className=" shadow-md ">
            <View 
                className="flex-row shadow-lg items-center rounded-full p-1"
                style={{backgroundColor:Color.Putih}} >
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
        </View>
    )
}

export default Search