import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Color from './constants/Color';


export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center" >
      {/* <Home /> */}
      <Text className="italic" style={{color: Color.Hijau}}>Ongko</Text>
      <StatusBar style="auto" />
    </View>
  );
}

