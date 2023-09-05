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
import Color from "../constants/Color";
import { useTabMenu } from "../context/TabContext";
import AddButton from "../components/AddButton";

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        position: "absolute",
        padding: 0,
        height: 56,
        borderRadius: 16,
        backgroundColor: Color.Putih,
        borderTopColor: "transparent",
        shadowColor: Color.AbuAbu,
        shadowOffset: {
        height: 6,
        width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    }
}

const AppNavigation = () => {
    const {opened, toggleOpened} = useTabMenu()
    
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" 
                component={HomeScreens}
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Home
                        size={24}
                        fill={focused ? Color.Hijau : Color.AbuAbu}
                        />
                }}}
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
                component={AddButton}
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
                    tabBarBadge: 3,
                    tabBarIcon: ({focused}) => { return <Notif size={24} stroke={focused ? Color.Hijau : Color.AbuAbu} />}
                }}
                listeners={{ tabPress: e => opened && e.preventDefault() }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigation