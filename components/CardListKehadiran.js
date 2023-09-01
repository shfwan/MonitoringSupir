import { View, Text } from 'react-native'
import React from 'react'

const CardListKehadiran = () => {
    return (
        <View>
            <FlatList
                data= { data.filter(item => item.category === props.category) }
                renderItem={
                    ({item}) => {
                        if(item.nama.toLowerCase().includes(props.search.toLowerCase())) {
                            
                            return (
                                <TouchableOpacity 
                                    className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white" 
                                    onPress={() => {
                                        console.log(item.nama)
                                    }}>
                                    <View className="flex-row items-center justify-between">
                                        <View className="flex-row items-center justify-start  ">
                                            <Image
                                                className="w-14 h-14 rounded-full"
                                                source={Gambar}
                                            />
                                            <View className="flex justify-start items-start mx-2 flex-column p-2">
                                                    <Text>{item.nama}</Text>
                                                    <Text>{item.category}</Text>
                                            </View>
                                        </View>
                                        <IconArrowRight/>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        if(props.search == ""){
                            item.category != "User" ? setHidden("") : setHidden("hidden")
                            return (
                                <TouchableOpacity className="px-3.5 py-2.5 h-fit rounded mt-4 bg-white">
                                    <View className="flex-row items-center justify-between">
                                        <View className="flex-row items-center justify-start  ">
                                            <Image
                                                className="w-14 h-14 mx rounded-full"
                                                source={Gambar}
                                            />
                                            <View className="flex justify-start items-start mx-2 flex-column p-2">
                                                    <Text>{item.nama}</Text>
                                                    <Text className={isHidden}>{item.category}</Text>
                                            </View>
                                        </View>
                                        <IconArrowRight/>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }
                }
            />
        </View>
    )
}

export default CardListKehadiran