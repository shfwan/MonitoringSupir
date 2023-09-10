import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const [isSupir, setSupir] = React.useState([])
React.useEffect(() => {
    axios.get('')
})

const CardListSupir = ({item}) => {
    return (
        <TouchableOpacity className="m-0.5 px-3.5 py-2.5 h-fit rounded my-1.5 bg-white" style={{elevation: 2}} onPress={() => navigate.navigate(selectorFilter, item)}>
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-start ">
                    <Image
                        className="w-14 h-14 rounded-full"
                        source={selectorFilter === "Kendaraan" ? Kendaraan : User}
                    />
                    <View className="flex justify-start items-start mx-2 flex-column p-2">
                        <Text>{selectorFilter !== "Supir" ? loadData : "item.name"}</Text>
                        <Text>{selectorFilter}</Text>
                    </View>
                </View>
                <IconArrowRight/>
            </View>
            {/* <MyLoader/> */}
        </TouchableOpacity>
    )
}

export default CardListSupir