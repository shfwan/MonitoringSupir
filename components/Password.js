import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, {useState} from 'react'
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
            <TouchableOpacity className="flex-row justify-between p-3 gap-2 items-center" onPress={() => setPassword(true)}>
                <Text className='text-base' style={{fontFamily:'semibold'}}>Ubah Password</Text>
                <Lock/>
            </TouchableOpacity>
            <Modal transparent visible={isPassword}>
                <View className="flex-1 justify-center" style={{backgroundColor:'#00000099'}}>
                    <View className="items-center">
                        <View className="w-fit h-fit items-center  justify-center bg-white flex-col p-5 rounded-2xl">
                            <View className="gap-y-4 items-center">
                                <Text className="text-xl" style={{fontFamily: 'bold'}}>Ubah Password</Text>
                                <View className="flex-row w-72 p-2 border rounded-md justify-between" style={{borderColor:Color.AbuAbu}}>
                                    <View className="mr-2">
                                        <Key/>
                                    </View>
                                    <View className="flex-1">
                                        <TextInput
                                            className="text-base text-black "
                                            placeholder='Create Password'
                                            placeholderTextColor={Color.AbuAbu}
                                            style={{fontFamily:'regular'}}
                                            secureTextEntry={isShown}
                                        />
                                    </View>
                                    <View className="ml-3">
                                        <TouchableOpacity
                                            onPress={()=> setShown(!isShown)}
                                            >{isShown ? (<EyeSlash/>) : (<Eye/>)}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View className="flex-row w-72 p-2 border rounded-md justify-between" style={{borderColor:Color.AbuAbu}}>
                                    <View className="mr-3">
                                        <Key/>
                                    </View>
                                    <View className="flex-1">
                                        <TextInput
                                            className="text-base text-black"
                                            placeholder='Confirm Password'
                                            placeholderTextColor={Color.AbuAbu}
                                            style={{fontFamily:'regular'}}
                                            secureTextEntry={isConfirm}
                                        />
                                    </View>
                                    <View className="ml-3">
                                        <TouchableOpacity
                                            onPress={()=> setConfirm(!isConfirm)}
                                        >{isConfirm ? (<EyeSlash/>) : (<Eye/>)}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View className="flex-row gap-x-2">
                                    <TouchableOpacity className="p-2 rounded-md" style={{backgroundColor: Color.Hijau}}>
                                        <View className="w-24 ">
                                            <Text className="text-white text-center" style={{fontFamily: 'semibold'}}>Simpan</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="p-2 rounded-md" style={{backgroundColor: Color.Hijau}} onPress={() => setPassword(false)}>
                                        <View className="w-24">
                                            <Text className="text-white text-center" style={{fontFamily: 'semibold'}}>Tidak</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Password