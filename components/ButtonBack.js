import React from "react";
import { TouchableOpacity, View } from "react-native";
import Color from "../constants/Color";
import ArrowLeft from '../assets/SVG/iconArrowLeft.svg'
import { SafeAreaView } from "react-native-safe-area-context";

export const ButtonBack = () => {
    return (
            
                <View className="rounded-2xl"  style={{ width: 45, height: 45, backgroundColor:Color.Putih, borderRadius:15, justifyContent:'center', alignItems:'center', marginLeft:10, borderColor:Color.AbuAbu, borderWidth:1 }}>
                    <ArrowLeft stroke={Color.Hitam}/>
                </View>
    )
}
export const ButtonBackHijau = () => {
    return (
            
                <View className="rounded-2xl"  style={{ width: 45, height: 45, backgroundColor:Color.Putih, borderRadius:15, justifyContent:'center', alignItems:'center', marginLeft:10, borderColor:Color.Hijau, borderWidth:1 }}>
                    <ArrowLeft stroke={Color.Hijau}/>
                </View>
    )
}

