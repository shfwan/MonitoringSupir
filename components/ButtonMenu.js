import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import Menu from '../assets/svg/iconMenu.svg'
import Color from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import Waktu from '../assets/svg/iconWaktu.svg'
import Lock from '../assets/svg/iconLock.svg'
import Exit from '../assets/svg/iconExit.svg'
import Password from './Password'
import Key from '../assets/svg/iconKey.svg'
import EyeSlash from '../assets/svg/IconEyeSlash.svg'
import Eye from '../assets/svg/IconEye.svg'
import ButtonLogOut from './ButtonLogOut'
import SetTime from './SetTime'

const ButtonMenu = () => {
    const [visible, setVisible] = useState(false)
    const [isPassword, setPassword] = useState(false)
    const [isShown, setShown] = useState(true)
    const [isConfirm, setConfirm] = useState(true)
    const options = [
        {
            title:'Atur Jam Kerja',
            icon: <Waktu/>,
        },
        {
            title:'Ubah Password',
            icon: <Lock/>,
        },
        {
            title:'Keluar',
            icon: <Exit stroke={Color.Hijau}/>,
        },
    ]
    

    return (
    <>
    <TouchableOpacity className="left-3.5 top-3.5 p-2 shadow-md shadow-gray-400 rounded-lg" style={{backgroundColor:Color.Putih}}
    onPress={() => setVisible(true)}
    onTouchStart={() => setVisible(false)}
    >
        <Menu stroke={Color.AbuAbu}/>
    </TouchableOpacity>
    <Modal transparent visible={visible}>
        <SafeAreaView className="flex-1 items-start " onTouchMove={() => setVisible(false)} >
            <View className="p-3  rounded-md shadow-gray-800 shadow-lg bg-white top-3.5 left-16" >
                <Password/>
                <SetTime/>
                <ButtonLogOut/>
            </View>
        </SafeAreaView>
    </Modal>
    </>
    )
}

export default ButtonMenu