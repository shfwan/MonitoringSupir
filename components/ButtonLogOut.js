import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Exit from '../assets/svg/iconExit.svg'
import Color from '../constants/Color'
const ButtonLogOut = () => {
  const [logOut, setLogOut] = useState(false)
  return (
    <>
      <TouchableOpacity className="flex-row justify-between p-3 gap-2 items-center"
    onPress={() => setLogOut(true)}
    >
      <Text className='text-base' style={{fontFamily:'semibold'}}>Keluar</Text>
      <Exit stroke={Color.Merah} strokeWidth={0.5}/>
    </TouchableOpacity>
      <Modal transparent={true} visible={logOut}>
        <View className="flex-1 items-center justify-center " style={{backgroundColor: "#00000099"}}>
            <View className="w-72 h-fit items-center justify-center bg-white flex-col p-4 rounded-2xl">
                <View className="m-5">
                    <Text className="text-lg text-center" style={{fontFamily: 'bold'}} >Apakah anda yakin ingin keluar ?</Text>
                </View>
                <View className="flex-row">
                    <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}}>
                        <View className="w-24 ">
                            <Text className="text-white text-center text-base" style={{fontFamily: 'semibold'}}>Iya</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}} onPress={() => setLogOut(false)}>
                        <View className="w-24">
                            <Text className="text-white text-center text-base" style={{fontFamily: 'semibold'}}>Tidak</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
      </Modal>
    </>
  )
}

export default ButtonLogOut