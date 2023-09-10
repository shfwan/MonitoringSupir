import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Color from './Color'
import CardList from '../components/CardList'
import { useFocusEffect } from '@react-navigation/native'
import CardListUser from '../components/CardListUser'
import useSWR from 'swr'

const ApiCard = (prop) => {
    const [isSupir, setSupir] = useState([])
    const [loading,setLoading] = useState(false)
    const selectorFilter = useSelector(data => data.filter)
    const selectorSearch = useSelector(data => data.search)
    
    const apiUrl = "https://monitoring-api-vert.vercel.app"
    const fetcher = async () => {
        const response = await axios.get(apiUrl + "/api/v1/supir")
        return response.data
    }

    const {data, isLoading, error} = useSWR('api/v1/supir', fetcher)

    return loading ? <ActivityIndicator color={Color.Hijau}  size={50} animating={loading} /> : (
        <FlatList
            data={data}
            renderItem={
                (data) => {
                    console.log(data.item.name)
                    if (data.item.name.toLowerCase().includes(selectorSearch.toLowerCase())) {
                        return (<CardListUser item={data.item}/>)
                    }

                    if(selectorSearch === "") {
                        // return (<CardList item={data.item}/>)
                        return (<CardListUser item={data.item}/>)
                    }
                }
            }
        />
    )
}

export default ApiCard