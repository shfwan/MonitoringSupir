import { View, Text, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Color from '../constants/Color'
import ButtonBack from '../components/ButtonBack'
import MapView from 'react-native-maps'
import Map from '../assets/svg/iconMap.svg'
import { useNavigation, useRoute } from '@react-navigation/native'

const DetailKehadiran = () => {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <View className="flex-1 px-3.5" style={{backgroundColor:Color.Putih}}>
            <SafeAreaView className="mt-3 flex-row items-center ">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ButtonBack/>
                </TouchableOpacity>
                <Text className="text-2xl ml-3" style={{fontFamily:'semibold', color:Color.Hijau}}>Detail Kehadiran</Text>
            </SafeAreaView>
            <View className="w-fit mt-5  p-4 rounded-md" style={{backgroundColor:Color.Hijau }}>
                <View className="justify-center items-center">
                    <Text className="text-base" style={{fontFamily:'semibold', color:Color.Putih}}>{route.params.tanggal}</Text>
                    <Text className="mt-4 text-2xl" style={{fontFamily:'semibold', color:Color.Putih}}>{route.params.nama}</Text>
                    <Text className="text-2xl" style={{fontFamily:'semibold', color:Color.Kuning}}>{route.params.category}</Text>
                </View>
                <View className="flex-row justify-evenly my-6">
                    <View className="items-center">
                        <Text className="text-base" style={{color:Color.Putih, fontFamily:'regular'}}>Jam Masuk</Text>
                        <Text className="text-base" style={{color:Color.Putih, fontFamily:'regular'}}>08:45 WIT</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-base" style={{color:Color.Putih, fontFamily:'regular'}}>Jam Masuk</Text>
                        <Text className="text-base" style={{color:Color.Putih, fontFamily:'regular'}}>08:45 WIT</Text>
                    </View>
                </View>
                <View className="rounded-md mb-3" style={{overflow:'hidden'}}>
                    <MapView className="w-auto h-52 rounded-md" pitchEnabled={false} rotateEnabled={false} zoomEnabled={false} scrollEnabled={false} />
                </View>
                <View className="flex-row mr-6 gap-2">
                    <Map/>
                    <Text className="text-base" style={{fontFamily:'regular', color:Color.Putih}}>Jln. Jendral Sudirman, sirimau, batumerah, RT 05 RW 51</Text>
                </View>
                <Text className="mt-4 text-xl" style={{fontFamily:'semibold', color:Color.Putih}} >Keterangan</Text>
                <View className="w-auto h-fit p-5 flex-row rounded-md" style={{backgroundColor:Color.Putih}}>
                    <Text className="text-base" style={{color:Color.Kuning, fontFamily:'regular'}}>Terlambat
                        <Text className="text-base" style={{fontFamily:'regular', color:Color.Hitam}}>, karena macet di batu merah. Sangat panjang sekali macetnya</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default DetailKehadiran