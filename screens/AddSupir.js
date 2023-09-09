import { View, Text, ScrollView, TouchableOpacity, Image,TextInput  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Color from "../constants/Color"
import { useState } from "react"
import { imageData } from "../constants/Data"
import * as ImagePicker from 'expo-image-picker'
import Camera from '../assets/svg/iconCamera.svg'
import { DataSupir } from "../constants/Database"
import { useNavigation } from "@react-navigation/native"
import ButtonBack from "../components/ButtonBack"

export const AddSupir = () => {
    const navigation = useNavigation()
    const [selectedImage, setSelectedImage] = useState(imageData[0])
    
    const handleImageSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        });
    
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    }
    
    return (
        <View className="flex-1 px-4" style={{backgroundColor:Color.Putih}}>
            <SafeAreaView className="mt-3 flex-row items-center ">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ButtonBack/>
                </TouchableOpacity>
                <Text className="text-2xl ml-3" style={{fontFamily:'semibold', color:Color.Hijau}}>Input Kendaraan</Text>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                >
                {/* Foto Profil */}
                <View style={{
                        alignItems:'center', marginVertical:22
                    }}>
                        <TouchableOpacity
                        onPress={handleImageSelection}
                        >
                            <Image
                            source={{uri: selectedImage}}
                            style={{
                                height:170,
                                width:170,
                                borderRadius:85,
                                borderWidth:4,
                                borderColor:Color.Hijau
                            }}
                            />
                            <View style={{
                                position:'absolute',
                                bottom:0,
                                right:10,
                                zIndex:9999,
                                width:40,
                                height:40,
                                borderRadius:20,
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor:Color.Hijau
                            }}>
                                <Camera
                                fill={Color.Putih}
                                
                                />

                            </View>

                        </TouchableOpacity>
                </View>
                {/* TextInput Data Supir*/}
                <View>
                    {DataSupir.map((supir, index)=> {
                        return (
                    <View className="flex-col mb-6" key={index}>
                        <Text className="text-base" style={{fontFamily:'regular'}}>{supir.title}</Text>
                        <View className="rounded-md" style={{height:44, width:'100%', marginVertical:6, justifyContent:"center", paddingLeft:8, backgroundColor:Color.AbuMuda}}>
                            <TextInput
                            placeholder={supir.placeholder}
                            placeholderTextColor={Color.AbuAbu}
                            style={{fontFamily:'regular', padding:10}}
                            className="text-base"
                            />
                        </View>
                    </View>
                        )
                    })}
                    <View className="flex-col mb-10">
                        <TouchableOpacity className="rounded-md" style={{height:44, width:'100%', marginVertical:6, justifyContent:'center', paddingLeft:8, backgroundColor:Color.Hijau}}>
                            <Text className="text-center text-lg" style={{fontFamily:'semibold', color:Color.Putih}}>
                                Simpan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </View>
    )
}