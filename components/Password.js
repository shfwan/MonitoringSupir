import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lock from '../assets/svg/iconLock.svg'
import Color from '../constants/Color'
import Key from '../assets/svg/iconKey.svg'
import EyeSlash from '../assets/svg/IconEyeSlash.svg'
import Eye from '../assets/svg/IconEye.svg'


const Password = () => {
    const [isPassword, setPassword] = useState(false)
    const [isShown, setShown] = useState(true)
    const [isConfirm, setConfirm] = useState(true)
  return (
    <>
    <TouchableOpacity className="flex-row justify-between p-3 gap-2 items-center"
    onPress={() => setPassword(true)}
    >
    <Text className='text-base' style={{fontFamily:'semibold'}}>Ubah Password</Text>
    <Lock/>
    </TouchableOpacity>
    <Modal transparent visible={isPassword}>
        <View className="flex-1 items-center justify-center" style={{backgroundColor:'#00000099'}}>
            <View className="w-72 h-fit items-center justify-center bg-white flex-col p-4 rounded-2xl">
                <View className="m-5">
                    <Text className="text-xl" style={{fontFamily: 'bold'}} >Ubah Password</Text>
                </View>
                <View className="flex-row mb-5 p-2 mx-3 border rounded-md items-center" style={{borderColor:Color.AbuAbu}}>
                    <Key/>
                    <TextInput
                    className="text-base ml-3 w-60"
                    placeholder='Create Password'
                    placeholderTextColor={Color.AbuAbu}
                    style={{fontFamily:'regular', width:'100%', color:Color.Hitam}}
                    secureTextEntry={isShown}
                    />
                    <TouchableOpacity
                    onPress={()=> setShown(!isShown)}
                    className="absolute right-3 my-4"
                    >{isShown ? (<EyeSlash/>) : (<Eye/>)}
                    </TouchableOpacity>
                </View>

                <View className="flex-row mb-5 p-2 mx-3 border rounded-md items-center" style={{borderColor:Color.AbuAbu}}>
                    <Key/>
                    <TextInput
                    className="text-base ml-3 w-60"
                    placeholder='Confirm Password'
                    placeholderTextColor={Color.AbuAbu}
                    style={{fontFamily:'regular', width:'100%', color:Color.Hitam}}
                    secureTextEntry={isConfirm}
                    />
                    <TouchableOpacity
                    onPress={()=> setConfirm(!isConfirm)}
                    className="absolute right-3 my-4"
                    >{isConfirm ? (<EyeSlash/>) : (<Eye/>)}
                    </TouchableOpacity>
                </View>

                <View className="flex-row">
                    <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}}>
                        <View className="w-24 ">
                            <Text className="text-white text-center" style={{fontFamily: 'semibold'}}>Simpan</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="mx-2 p-2 rounded-md" style={{backgroundColor: Color.Hijau}} onPress={() => setPassword(false)}>
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

export default Password