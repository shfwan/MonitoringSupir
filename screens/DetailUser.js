import { View, Text, Image, FlatList, ScrollView} from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import ButtonBack  from '../components/ButtonBack'
import { SafeAreaView } from 'react-native-safe-area-context'
import Phone from '../assets/svg/iconPhone.svg'
import Alamat from '../assets/svg/iconAlamat.svg'
import Email from '../assets/svg/iconEmail.svg'
import Status from '../components/Status'
import { statusCount } from '../constants/Database'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'

const DetailUser = () => {
    const route = useRoute()
    const [textInput, setTextInput] = React.useState(
        {
            id: route.params.id,
            username: route.params.user.username,
            foto: route.params.foto,
            bio: route.params.bio === null ? "Bio belum diisi": route.params.user.userProfile.bio,
            phoneNumber: route.params.user.supir.phoneNumber,
            alamat: route.params.user.supir.alamat,
        }
    )

    const date = new Date()
    const bulan = ["Januari", "Februari", "Maret", "April", "May", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    return (
        <View className="flex-1" style={{backgroundColor:Color.Putih}}>
            <SafeAreaView className="px-3 mt-3 flex-row items-center ">
                <ButtonBack/>
                <Text className="text-2xl ml-3" style={{fontFamily:'semibold', color:Color.Hijau}}>Detail User</Text>
            </SafeAreaView>
            <View className="">
                <ScrollView className="h-screen">
                    <View className="h-screen justify-end ">
                        <View className="px-6 py-5 mb-20 rounded-tr-3xl rounded-tl-3xl " style={{backgroundColor:Color.Hijau}}>
                            <View className="items-center justify-center bottom-0">
                                <Image 
                                    source={{uri: `https://monitoring-api-vert.vercel.app${textInput.foto}`}}
                                    style={{height:170, width:170, borderRadius:85, borderWidth:4, borderColor:Color.Putih, marginTop:-100}}/>
                                <Text className="text-2xl mt-3" style={{fontFamily:'regular', color:Color.Putih}}>{textInput.username}</Text>
                            </View>
                            <View>
                                <View className="flex-row items-center gap-3 mt-3">
                                    <Email stroke={Color.Putih}/>
                                    <Text className="text-lg " style={{fontFamily:'semibold', color:Color.Putih}}>{textInput.bio}</Text>
                                </View>
                                <View className="flex-row items-center gap-3 mt-3">
                                    <Phone stroke={Color.Putih}/>
                                    <Text className="text-lg " style={{fontFamily:'semibold', color:Color.Putih}}>{textInput.phoneNumber}</Text>
                                </View>
                                <View className="flex-row items-center gap-3 mt-3">
                                    <Alamat stroke={Color.Putih}/>
                                    <Text className="text-lg " style={{fontFamily:'semibold', color:Color.Putih}}>{textInput.alamat}</Text>
                                </View>

                            </View>
                            <View className="mt-5">
                                <View className="mt-6 mb-3 flex-row gap-x-1">
                                    <Text className="text-lg text-white" style={{fontFamily:'regular'}}>Absensi bulan</Text>
                                    <Text className="text-lg text-black" style={{fontFamily:'semibold'}}>{bulan[date.getMonth()]}</Text>
                                    <Text className="text-lg text-white" style={{fontFamily:'semibold'}}>{date.getFullYear()}</Text>
                                </View >
                                <View className="items-center">
                                    <FlatList
                                        scrollEnabled={false}
                                        data={statusCount}
                                        numColumns={2}
                                        renderItem={
                                            ({item}) => (
                                                <View className="m-1">
                                                    <Status icon={item.icon} status={item.status} count={item.count}/>
                                                </View>
                                            )
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
)
}

export default DetailUser