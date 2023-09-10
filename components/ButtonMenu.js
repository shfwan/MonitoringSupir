import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Menu from '../assets/svg/iconMenu.svg'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import Waktu from '../assets/svg/iconWaktu.svg'
import Lock from '../assets/svg/iconLock.svg'
import Exit from '../assets/svg/iconExit.svg'

const ButtonMenu = () => {
    const [visible, setVisible] = useState(false)
    const options = [
        {
            title:'Atur Jam Kerja',
            icon: <Waktu/>,
            action :() => alert('Atur Jam Kerja')
        },
        {
            title:'Ubah Password',
            icon: <Lock/>,
            action : () => alert('Ubah Password')
        },
        {
            title:'Keluar',
            icon: <Exit stroke={Color.Hijau}/>,
            action : () => alert('Keluar')
        },
    ]
    return (
    <>
    <TouchableOpacity className="left-3.5 top-3.5 p-2 shadow-md shadow-gray-400 rounded-lg" style={{backgroundColor:Color.Putih}}
    onPress={() => setVisible(true)}
    >
        <Menu stroke={Color.AbuAbu}/>
    </TouchableOpacity>
    <Modal transparent visible={visible}>
        <SafeAreaView className="flex-1 items-start " onTouchStart={() => setVisible(false)}>
            <View className="p-3  rounded-md shadow-gray-800 shadow-lg bg-white top-3.5 left-16">
                {options.map((op , i)=>(
                    <TouchableOpacity key={i} onPress={op.action}
                        className="flex-row justify-between p-3 gap-2 items-center gap"
                        style={{borderBottomColor:'#ccc', borderBottomWidth: 1}}
                    >
                        <Text className="text-base" style={{fontFamily:'semibold'}}>{op.title}</Text>
                        <View>{op.icon}</View>
                    </TouchableOpacity>
                ))}
            </View>

        </SafeAreaView>
    </Modal>
    </>
    )
}

export default ButtonMenu