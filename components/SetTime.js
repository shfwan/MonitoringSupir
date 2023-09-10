import { View, Text, TouchableOpacity, Modal} from 'react-native'
import React, { useState } from 'react'
import Waktu from '../assets/svg/iconWaktu.svg'
import Color from '../constants/Color'

const SetTime = () => {
    const [Time, setTime] = useState(false)
  return (
    <>
    <TouchableOpacity className="flex-row justify-between p-3 gap-2 items-center"
    onPress={() => setTime(true)}
    >
      <Text className='text-base' style={{fontFamily:'semibold'}}>Atur Jam Kerja</Text>
      <Waktu stroke={Color.Hitam}/>
    </TouchableOpacity>
    <Modal transparent={true} visible={Time}>
        <View className="flex-1 items-center justify-center " style={{backgroundColor: "#00000099"}}>
            <View className="w-72 h-fit items-center justify-center bg-white flex-col p-4 rounded-2xl">
                <View className="m-5">
                    <Text className="text-lg" style={{fontFamily: 'bold'}} >Atur Jam Kerja</Text>
                </View>
                <View className="flex-row">
                    <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}}>
                        <View className="w-24 ">
                            <Text className="text-white text-center" style={{fontFamily: 'semibold'}}>Iya</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}} onPress={() => setTime(false)}>
                        <View className="w-24">
                            <Text className="text-white text-center" style={{fontFamily: 'semibold'}}>Tidak</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
      </Modal>
    </>
  )
}

export default SetTime