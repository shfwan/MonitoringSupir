import { View, Text, ScrollView, TouchableOpacity, Image,TextInput  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Color from "../constants/Color"
import { useState } from "react"
import { imageData } from "../constants/Data"
import * as ImagePicker from 'expo-image-picker'
import Camera from '../assets/SVG/iconCamera.svg'
import { DataSupir } from "../constants/Database"

export const Contoh = () => {
    const [selectedImage, setSelectedImage] = useState(imageData[0])
    
    const handleImageSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        }
      }
    return (
        <View className="flex-1" style={{backgroundColor:Color.Putih}} 
            >
            <SafeAreaView style={{flex:1, backgroundColor:Color.Putih, paddingHorizontal:22}}>
                <View style={{marginHorizontal:12, flexDirection:"row", justifyContent:'center', padding:9}}>
                    <Text className="text-lg" style={{fontFamily:'semibold'}}>Input Supir</Text>

                </View>
                
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
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
                <View>
                    {DataSupir.map((supir, index) => {
                        return (
                    <View key={index} className="flex-col mb-6">
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
                </View>
                </ScrollView>
            </SafeAreaView>
            </View>
    )
}