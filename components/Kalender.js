import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Color from '../constants/Color'
import { Calendar } from 'react-native-calendars'
// import iconCalender from '../assets/svg/'

const Kalender = (props) => {
    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ]
    const date = new Date()
    const tanggal = `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`
    const [isDate, setDate] = useState(tanggal)

    const [showModal, setModal] = useState(false)

    return (
        <View className="items-center" style={{display: props.display}}>
            <TouchableOpacity className="bg-white p-2 rounded-md " style={{elevation: 5}}>
                <Text  className="text-base font-bold" style={{color: Color.Hijau}} onPress={() => setModal(true)}> {isDate} </Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={showModal} animationType='fade' onRequestClose={() => setModal(false)}>
                <TouchableOpacity className="h-full" activeOpacity={1} onPressOut={() => setModal(false)}>
                    <View className="pt-24 item">
                        <View className="m-5 bg-white rounded-3xl" style={{elevation: 4}}>
                            <View className="m-5 ">
                                <Calendar                                
                                    onDayPress={(day) => {
                                        setDate(`${day.day} ${bulan[day.month - 1]} ${day.year}`)
                                        setModal(false)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Kalender