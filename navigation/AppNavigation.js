import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllDataScreens from "../screens/AllDataScreens";
import HomeScreens from '../screens/HomeScreens'
import HistoryScreens from '../screens/HistoryScreens'
import NotificationScreens from '../screens/NotificationScreens'
import Home from '../assets/svg/iconHome.svg'
import Statistik from '../assets/svg/iconStatistik.svg'
import Data from '../assets/svg/iconData.svg'
import Notif from '../assets/svg/iconNotif.svg'
import Color from "../constants/Color"
import { useTabMenu } from "../context/TabContext"
import AddButton from "../components/AddButton"
import { useDispatch, useSelector } from "react-redux";
import {Platform} from 'react-native'
import { dataKehadiran } from "../constants/Database";
import { setCountNotif } from "../redux/action";

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        position: "fixed",
        height: Platform.OS === 'ios' ? 100 : 60,
        borderTopLeftRadius: 16,
        borderTopRightRadius:16,
        backgroundColor: Color.Putih,
        shadowColor: Color.AbuAbu,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
    }
}



const AppNavigation = () => {
    const {opened, toggleOpened} = useTabMenu()
    const selectorNotif = useSelector(item => item.countNotif)
    const dispatch = useDispatch()
    dispatch(setCountNotif(dataKehadiran.length))
    return (
        <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Home" 
                    component={HomeScreens}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return <Home size={24} fill={focused ? Color.Hijau : Color.AbuAbu} />
                        }
                    }}
                    listeners={{
                        tabPress: e => opened && e.preventDefault(),
                    }}
                />
                <Tab.Screen 
                    name="History" 
                    component={HistoryScreens}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return <Statistik size={24} stroke={focused ? Color.Hijau : Color.AbuAbu  } />
                        }
                    }}
                    listeners={{ tabPress: e => opened && e.preventDefault() }}
                />
                <Tab.Screen
                    name="Add"
                    component={HomeScreens}
                    options={{
                        tabBarItemStyle: {height: 0},
                        tabBarButton: () => ( <AddButton opened={opened} toggleOpened={toggleOpened} /> )
                    }}
                />
                <Tab.Screen name="AllData" 
                    component={AllDataScreens}
                    options={{
                        tabBarIcon: ({focused}) => { return <Data size={24} stroke={focused ? Color.Hijau : Color.AbuAbu  } /> }
                    }}
                    listeners={{ tabPress: e => opened && e.preventDefault() }}
                />
                <Tab.Screen name="Notif" 
                    component={NotificationScreens}
                    options={{
                        tabBarBadge: selectorNotif !== null ? selectorNotif : null,
                        tabBarIcon: ({focused}) => { return <Notif size={24} stroke={focused ? Color.Hijau : Color.AbuAbu} />}
                    }}
                    listeners={{ tabPress: e => opened && e.preventDefault() }}
                />
        </Tab.Navigator>
    )
}

export default AppNavigation