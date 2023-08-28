import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreens from "../screens/HomeScreens";
import AllDataScreens from "../screens/AllDataScreens";
import HistoryScreens from "../screens/HistoryScreens";
import NotificationScreens from "../screens/NotificationScreens";
import Color from "../constants/Color";
import Home from '../assets/SVG/iconHome.svg'
import Data from '../assets/SVG/iconData.svg'
import Statistik from '../assets/SVG/iconStatistik.svg'
import Notif from '../assets/SVG/iconNotif.svg'
import AddButton from "../components/AddButton";
import {useTabMenu} from "../context/TabContext";

const Tab = createBottomTabNavigator();

const getIconColor = focused => ({
  tintColor: focused ? Color.Hijau : Color.AbuAbu,
});

const TabsNavigator = () => {
  const {opened, toggleOpened} = useTabMenu();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreens}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Home
              style={[styles.tabIcon, getIconColor(focused)]} />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreens}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
            <Statistik 
            style={[styles.tabIcon, getIconColor(focused)]}
            />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <AddButton opened={opened} toggleOpened={toggleOpened} />
          ),
        }}
      />
      <Tab.Screen
        name="AllData"
        component={AllDataScreens}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Data 
              style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Notif 
              style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
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
  },
  tabIconContainer: {
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
});

export default TabsNavigator;
