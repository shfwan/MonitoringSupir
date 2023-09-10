import { ActivityIndicator, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Color from './Color'
import CardList from '../components/CardList'
import CardListUser from '../components/CardListUser'
import useSWRNative, {useSWRNativeRevalidate} from '@nandorojo/swr-react-native'

const ApiCard = (prop) => {
    const selectorFilter = useSelector(data => data.filter)
    const selectorSearch = useSelector(data => data.search)
    
    const apiUrl = "https://monitoring-api-vert.vercel.app"
    const fetcher = async () => {
        const response = await axios.get(apiUrl + "/api/v1/supir")
        return response.data
    }
    
    const {data, isLoading, error, mutate} = useSWRNative('api/v1/supir', fetcher)
    useSWRNativeRevalidate({
        mutate,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        focusThrottleInterval: 500,
    })

    const handleFilterCategories = (data) => {
        if (selectorFilter === "Kendaraan") {
            return (<CardList item={data.item}/>)
        } else if (selectorFilter === "Supir") {
            return (<CardList item={data.item}/>)
        } else if (selectorFilter === "User") {
            return (<CardListUser item={data.item}/>)
        }
    }

    return isLoading ? <ActivityIndicator color={Color.Hijau}  size={50} animating={isLoading} /> : (
        <FlatList
            data={data}
            renderItem={
                (data) => {
                    if (data.item.name.toLowerCase().includes(selectorSearch.toLowerCase())) {
                        return handleFilterCategories(data)
                    }

                    if(selectorSearch === "") {
                        return handleFilterCategories(data)
                    }
                }
            }
        />
    )
}

export default ApiCard