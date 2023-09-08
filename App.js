import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import AppNavigation from './navigation/AppNavigation';
import {useFonts} from 'expo-font'
import React, {useCallback} from 'react';
import AddKendaraan from './screens/AddKendaraan';
import { AddSupir } from './screens/AddSupir';
import { TabContextProvider } from './context/TabContext';
import DetailKehadiran from './screens/DetailKehadiran';
import DetailSupir from './screens/DetailSupir';
import DetailUser from './screens/DetailUser';
import DetailKendaraan from './screens/DetailKendaraan';
import { Provider } from 'react-redux';
import storeState from './redux/store';



const Stack = createNativeStackNavigator()
export default function App() {
  const [fontsLoaded] = useFonts({
    regular : require("./assets/fonts/Poppins-Regular.ttf"),
    light : require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    semibold : require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium : require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold : require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })
  const onLayoutRootView = useCallback(async()=> {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }
  return (
    <Provider store={storeState}>
      
      <TabContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='AppNavigation' screenOptions={{headerShown:false}}>
              <Stack.Screen name='AppNavigation' component={AppNavigation}/>
              <Stack.Screen name='AddKendaraan' component={AddKendaraan}/>
              <Stack.Screen name='AddSupir' component={AddSupir}/>
              <Stack.Screen name='Kehadiran' component={DetailKehadiran}/>
              <Stack.Screen name='Kendaraan' component={DetailKendaraan}/>
              <Stack.Screen name='Supir' component={DetailSupir}/>
              <Stack.Screen name='User' component={DetailUser}/>
          </Stack.Navigator>
        </NavigationContainer>
      </TabContextProvider>
    </Provider>
  );
}

