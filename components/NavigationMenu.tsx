import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Homepage from "../pages/Homepage";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={{
      top: -15,
      justifyContent: "center",
      alignItems: "center",
      ...style.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const NavigationMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        component={Homepage}
        name="Profile"
        options={{
          tabBarIcon: () => <Icon name="home" type="ionicon" color="#517fa4" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarIcon: ({}) => (
            <View
              style={{
                backgroundColor: "red",
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            >
              <Icon name="home" type="ionicon" color="#517fa4" />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Vacations"
        component={() => <View></View>}
        options={{
          tabBarIcon: () => (
            <Icon name="calendar" type="ionicon" color="#517fa4" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationMenu;

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#555",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
