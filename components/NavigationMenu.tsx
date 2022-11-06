import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import Homepage from "../pages/Homepage";

const Tab = createBottomTabNavigator();

const NavigationMenu = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        component={Homepage}
        name="Home"
        options={{
          tabBarIcon: () => <Icon name="home" type="ionicon" color="#517fa4" />,
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
