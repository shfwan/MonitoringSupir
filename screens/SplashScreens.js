import { View, Text, Image } from 'react-native'
import React from 'react'
import car from '../assets/icon/car.png'
import iconPln from '../assets/icon/PLN.png'

const SplashScreens = () => {
    return (
        <View className="flex-1 justify-center bg-white" >
            <View className="items-center">
                <Image style={{position: "relative", top: 40}} source={car}/>
                <Image source={iconPln}/>
            </View>
        </View>
    )
}

export default SplashScreens